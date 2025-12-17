# --------------------------------------------------------------------
# ステージ 1: ベースイメージの選択
# --------------------------------------------------------------------
# PHP 8.2 と Apache ウェブサーバーがあらかじめ設定されている公式イメージを使用します。
# アプリケーションを動かすための土台（OS、PHP環境など）になります。
FROM php:8.2-apache

# --------------------------------------------------------------------
# ステージ 2: 必要なツールのインストールと設定
# --------------------------------------------------------------------

# curl（ファイルをダウンロードするコマンド）と zip, unzip などをインストールします。
# 依存関係を更新し、インストール後にはキャッシュを削除してイメージサイズを小さくします。
RUN apt-get update && apt-get install -y \
    curl \
    zip \
    unzip \
    libonig-dev \
    libzip-dev \
    && rm -rf /var/lib/apt/lists/*

# PHPの拡張機能（よく使われる機能）を有効にします。
# mbstring: 日本語などマルチバイト文字の処理に必要
# zip: ファイル圧縮・解凍機能
RUN docker-php-ext-install pdo_mysql mbstring zip

# --------------------------------------------------------------------
# ステージ 3: MailHogのmhsendmailを設定
# --------------------------------------------------------------------

# 以前エラーになった部分を修正しました。URLの周りの不要な記号を削除しています。
# 仮想メールサーバー (MailHog) への送信を可能にするツール (mhsendmail) をダウンロードし、
# 実行権限を与え、/usr/local/bin に移動して、どこからでも使えるようにします。
RUN curl -sSLO https://github.com/mailhog/mhsendmail/releases/download/v0.2.0/mhsendmail_linux_amd64 \
    && chmod +x mhsendmail_linux_amd64 \
    && mv mhsendmail_linux_amd64 /usr/local/bin/mhsendmail

# Wrapper script creation to strip arguments (like -t -i which mhsendmail doesn't support)
RUN echo '#!/bin/sh' > /usr/local/bin/sendmail-wrapper \
    && echo '/usr/local/bin/mhsendmail --smtp-addr=mailhog:1025' >> /usr/local/bin/sendmail-wrapper \
    && chmod +x /usr/local/bin/sendmail-wrapper

# PHPの設定ファイル (php.ini) を変更し、メール送信に wrapper を使うように指示します。
RUN echo "sendmail_path=/usr/local/bin/sendmail-wrapper" >> /usr/local/etc/php/conf.d/mailhog.ini

# --------------------------------------------------------------------
# ステージ 4: アプリケーションコードのコピーと設定
# --------------------------------------------------------------------

# コンテナ内部のApacheのルートディレクトリ（/var/www/html）に、
# ホスト環境（あなたのPC）の現在のディレクトリにある全てのファイルをコピーします。
COPY . /var/www/html

# ウェブサーバー（Apache）のルートディレクトリを変更する設定を追加します。
# 例えば、Laravelなどでは公開ディレクトリが 'public' フォルダになるため、
# そのフォルダをルートにするための設定を書いています。
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf \
    && a2enmod rewrite # URLからindex.phpを消すなどの設定（RewriteEngine）を有効にします。

# --------------------------------------------------------------------
# ビルド完了！
# --------------------------------------------------------------------