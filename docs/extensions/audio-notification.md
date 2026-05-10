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
