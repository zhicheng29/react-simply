// https://cz-git.qbb.sh/zh/guide/
// https://commitlint.js.org/#/reference-rules

const fs = require("fs");
const path = require("path");

const scopes = fs
  .readdirSync(path.resolve(__dirname, "src"), { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name.replace(/s$/, ""));

/** @type {import('cz-git').UserConfig} */
module.exports = {
  ignores: [commit => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "subject-case": [0],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release"
      ]
    ]
  },
  prompt: {
    messages: {
      type: "你要提交的类型：",
      scope: "提交范围：",
      customScope: "自定义提交范围：",
      subject: "变更描述：\n",
      body: "详细的变更描述（'|'换行）：\n",
      breaking: "重大的变更（'|'换行）：\n",
      footerPrefixsSelect: "关联的issue前缀：",
      customFooterPrefixs: "自定义issue前缀：",
      footer: "列举关联的issue（#1, #2）：\n",
      confirmCommit: "是否提交或修改commit？"
    },
    types: [
      {
        value: "feat",
        name: "feat：新增功能"
      },
      {
        value: "fix",
        name: "fix：修复问题"
      },
      {
        value: "style",
        name: "style：代码格式(不影响代码运行的变动)"
      },
      {
        value: "type",
        name: "type：类型修改"
      },
      {
        value: "test",
        name: "test：新增测试"
      },
      {
        value: "docs",
        name: "docs：文档变更"
      },

      {
        value: "wip",
        name: "wip：开发中"
      },
      {
        value: "perf",
        name: "perf：性能优化"
      },
      {
        value: "refactor",
        name: "refactor：重构"
      },
      {
        value: "chore",
        name: "chore：构建过程或辅助工具的变动"
      },
      {
        value: "build",
        name: "build：编译/打包配置相关"
      },
      {
        value: "revert",
        name: "revert：撤销修改/回滚"
      },
      {
        value: "workflow",
        name: "workflow：工作流修改"
      },
      {
        value: "ci",
        name: "ci：持续集成"
      }
    ],
    useEmoji: true,
    scopes: [...scopes],
    customScopesAlign: "bottom",
    emptyScopesAlias: "empty",
    customScopesAlias: "custom",
    allowBreakingChanges: ["feat", "fix"]
  }
};
