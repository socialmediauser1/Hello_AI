# Hello AI - Chat Interface

A minimal, beautiful chat interface that connects to LLM APIs like OpenRouter, OpenAI, and other OpenAI-compatible services.

## 🚀 Quick Setup

### 1. Get an API Key

**For OpenRouter (Recommended):**
1. Go to [OpenRouter.ai](https://openrouter.ai/)
2. Sign up and get your API key
3. Add credits to your account

**For OpenAI:**
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Create an API key

### 2. Configure Environment

Create a `.env` file in the project root:

```bash
# OpenRouter Configuration (Recommended)
OPENAI_API_KEY=your_openrouter_api_key_here
OPENAI_API_BASE=https://openrouter.ai/api/v1
OPENAI_MODEL=anthropic/claude-3.5-sonnet

# Alternative models:
# OPENAI_MODEL=openai/gpt-4o-mini
# OPENAI_MODEL=google/gemini-pro-1.5
# OPENAI_MODEL=meta-llama/llama-3.1-8b-instruct
# OPENAI_MODEL=microsoft/phi-3-mini-4k-instruct

# Server Configuration
PORT=3000
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
npm start
```

### 5. Open in Browser

Visit: `http://localhost:3000`

## 🎯 Features

- **Modern Chat Interface** - Beautiful, responsive design
- **Multiple LLM Support** - Works with OpenRouter, OpenAI, and compatible APIs
- **Real-time Typing Indicators** - Shows when AI is thinking
- **Keyboard Shortcuts** - Enter to send, Shift+Enter for new line
- **Auto-resizing Input** - Input field grows as you type
- **Message History** - Scrollable chat with proper message bubbles

## 🔧 API Configuration

The server automatically handles:
- ✅ CORS for cross-origin requests
- ✅ Error handling and user feedback
- ✅ OpenAI-compatible API format
- ✅ Proper authentication headers

## 📱 Usage

1. Type your message in the input field
2. Press **Enter** to send or **Shift+Enter** for new line
3. Watch the AI respond with typing indicators
4. Continue the conversation naturally

## 🛠️ Troubleshooting

**"Error: HTTP 405"** - Check your API key and model name
**"Error: HTTP 401"** - Invalid API key or insufficient credits
**"Error: HTTP 429"** - Rate limit exceeded, try again later

## 🌟 Supported Models

- **Claude 3.5 Sonnet** (anthropic/claude-3.5-sonnet)
- **GPT-4o Mini** (openai/gpt-4o-mini)
- **Gemini Pro** (google/gemini-pro-1.5)
- **Llama 3.1** (meta-llama/llama-3.1-8b-instruct)
- **Phi-3 Mini** (microsoft/phi-3-mini-4k-instruct)

And many more through OpenRouter!