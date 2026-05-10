# Audio & Notification — 音频与通知

> 53 个包 | 最高月下载量 2,208 (@codexstar/pi-listen)

## 音频（25 包）

| 方案 | 月下载 | 功能 |
|------|--------|------|
| `@codexstar/pi-listen` | 2,208 | 语音输入+输出（Deepgram STT + TTS） |
| `voipi` | 937 | Web 语音界面 |
| `pi-smart-voice-notify` | 715 | Windows 语音+声音+桌面通知 |
| `@pithings/voipi-pi` | 477 | TTS 工具和命令 |
| `@s1m0n38/pi-voice` | 432 | Kokoro TTS HTTP 服务器 |

### 非语音音频
| 方案 | 月下载 | 功能 |
|------|--------|------|
| `pi-cider` | 2,293 | Apple Music 控制（Cider 客户端） |
| `pi-tuturu` | 388 | 完成音效通知 |

## 通知（28 包）

| 方案 | 月下载 | 通道 |
|------|--------|------|
| `pi-gotify-notifier` | 913 | Gotify 推送 |
| `pi-notify` | 458 | OSC 777 终端通知 |
| `desktop-notify-kitty` | 445 | Kitty 终端桌面通知 |
| `@pi-unipi/notify` | 1,233 | Unipi 套件通知组件 |

### 通知事件类型

```
session_start → "PI 已启动"
agent_end    → "任务完成" (+ 耗时)
tool_error   → "工具执行失败" 
long_task    → "长任务仍在运行"
```

## 选型

- **语音交互**：`@codexstar/pi-listen`
- **桌面通知**：`pi-notify`（跨平台）
- **移动推送**：`pi-gotify-notifier`

<!-- AUTO-GENERATED-INSTALL:START -->
## 安装速查

以下为自动排行后的推荐安装入口，命令均可直接复制。

### 音频

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@codexstar/pi-listen](https://www.npmjs.com/package/@codexstar/pi-listen) | 2,208 | `npm install @codexstar/pi-listen` | Voice in + voice out for Pi CLI — hold-to-talk STT (Deepgram or 19 offline models) plus… |
| 2 | [voipi](https://www.npmjs.com/package/voipi) | 937 | `npm install voipi` | <p align="center"> <a href="https://voipi.vercel.app/"><img src="logo.svg" alt="voipi"… |
| 3 | [pi-smart-voice-notify](https://www.npmjs.com/package/pi-smart-voice-notify) | 715 | `npm install pi-smart-voice-notify` | Windows-optimized smart voice, sound, and desktop notifications for Pi coding agent. |
| 4 | [@pithings/voipi-pi](https://www.npmjs.com/package/@pithings/voipi-pi) | 477 | `npm install @pithings/voipi-pi` | Pi extension that adds text-to-speech tools and commands powered by VoiPi |
| 5 | [@s1m0n38/pi-voice](https://www.npmjs.com/package/@s1m0n38/pi-voice) | 432 | `npm install @s1m0n38/pi-voice` | HTTP server for Kokoro TTS — text-to-speech via ONNX inference. |

### 通知

| # | 插件 | 月下载量 | 安装命令 | 说明 |
|---|---|---|---|---|
| 1 | [@pi-unipi/notify](https://www.npmjs.com/package/@pi-unipi/notify) | 1,233 | `npm install @pi-unipi/notify` | Cross-platform notification extension for Pi — native OS, Gotify, and Telegram notifica… |
| 2 | [pi-gotify-notifier](https://www.npmjs.com/package/pi-gotify-notifier) | 913 | `npm install pi-gotify-notifier` | Send Gotify notifications for pi agent session events |
| 3 | [pi-notify](https://www.npmjs.com/package/pi-notify) | 458 | `npm install pi-notify` | Desktop notifications for Pi agent via OSC 777/99/9 and Windows toast |
| 4 | [desktop-notify-kitty](https://www.npmjs.com/package/desktop-notify-kitty) | 445 | `npm install desktop-notify-kitty` | Pi extension that sends desktop notifications via kitten notify (kitty) or notify-send… |
| 5 | [@diegopetrucci/pi-notify](https://www.npmjs.com/package/@diegopetrucci/pi-notify) | 406 | `npm install @diegopetrucci/pi-notify` | A pi extension that sends a notification when the agent is ready for input. |

### 全量目录

本分类的完整插件清单与安装命令见 [PI 全量插件目录](../pi-extension-catalog.md)。
<!-- AUTO-GENERATED-INSTALL:END -->
