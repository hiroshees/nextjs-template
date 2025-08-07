# Nextjsテンプレート

[![Copier](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/copier-org/copier/master/img/badge/badge-black.json)](https://github.com/copier-org/copier)

Nextjs project template powered by [Copier](https://copier.readthedocs.io/).

## クイックスタート

### 前提条件

- [Visual Studio Code](https://code.visualstudio.com/): Your code editor. Redefined with AI
- [Docker](https://www.docker.com/): Develop faster. Run anywhere
- [uv](https://docs.astral.sh/uv/): Fast Python package installer
- [copier](https://copier.readthedocs.io/en/stable/): For rendering project templates

### UVインストール

```bash
# mac, linux
curl -LsSf https://astral.sh/uv/install.sh | sh
```

```bash
# windows
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

```bash
#確認
uv -V
```

### Copierインストール

uv環境にCopierをインストールします

```bash
uv tool install copier
```

```bash
#確認
uv tool
```

### 新規プロジェクト作成
uvとcopierを利用して、コピーします

```bash
uvx copier copy gh:hiroshees/nextjs-template <your-project-name>
```
or

```bash
uvx copier copy git@github.com:hiroshees/nextjs-template.git <your-project-name>
```

プロンプトに従って、プロジェクトの基礎情報を入力します

### 開発用セットアップ
プロジェクト構築後に、以下の手順で実行環境を構築します。voltaを利用してnodejsをインストールします。プロジェクト管理ツールとしてpnpmを利用します

```bash
cd <your-project-name>

# Install dependencies
pnpm install

# Run formatting and linting (automatically runs on commit)
pnpm run lint
pnpm run lint:fix
pnpm run format
pnpm run format:fix

```

### テンプレートの更新

```bash
cd <your-project-name>
uv copier update -A
```

## VS Code Devcontainer
VSCodeの場合、Devcontainerを開きます
