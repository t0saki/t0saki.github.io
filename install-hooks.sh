#!/bin/bash

# 获取仓库根目录
REPO_ROOT=$(git rev-parse --show-toplevel)

# 确保hooks目录存在
mkdir -p "$REPO_ROOT/.git/hooks"

# 复制pre-commit钩子并使其可执行
cp "$REPO_ROOT/hooks/pre-commit" "$REPO_ROOT/.git/hooks/"
chmod +x "$REPO_ROOT/.git/hooks/pre-commit"

echo "Git hooks installed successfully." 