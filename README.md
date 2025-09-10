## 🚀 Live Demo

**Frontend**: [https://socialmediauser1.github.io/Hello_AI/](https://socialmediauser1.github.io/Hello_AI/)  
**Backend**: [https://hello-ai-2bnw.onrender.com](https://hello-ai-2bnw.onrender.com)

Setup:

###1. Get an API Key

**For OpenRouter (Recommended):**
1. Go to [OpenRouter.ai](https://openrouter.ai/)
2. Sign up and get your API key
3. Add credits to your account

**For OpenAI:**
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Create an API key

### 2. Local Development

```bash
# Clone the repository
git clone https://github.com/socialmediauser1/Hello_AI.git
cd Hello_AI

# Install dependencies
npm install

# Create .env file
echo "OPENAI_API_KEY=your_api_key_here" > .env
echo "OPENAI_API_BASE=https://openrouter.ai/api/v1" >> .env
echo "OPENAI_MODEL=deepseek/deepseek-chat-v3.1:free" >> .env

# Start the server
npm start
```

Visit: `http://localhost:3000`

### 3. Deploy to Production

**Frontend (GitHub Pages):**
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Your site will be available at `https://yourusername.github.io/Hello_AI/`

**Backend (Render):**
1. Go to [Render.com](https://render.com/)
2. Connect your GitHub repository
3. Create a new Web Service
4. Add environment variables:
   - `OPENAI_API_KEY` = your API key
   - `OPENAI_API_BASE` = `https://openrouter.ai/api/v1`
   - `OPENAI_MODEL` = `anthropic/claude-3.5-sonnet`
5. Deploy

## 📱 Usage

1. Type your message in the input field
2. Press **Enter** to send or **Shift+Enter** for new line
3. Watch the AI respond with typing indicators
4. Continue the conversation naturally

## 🛠️ Troubleshooting

**"Error: HTTP 401"** - Check your API key and model name  
**"Error: HTTP 429"** - Rate limit exceeded, try again later  
**"Error: Failed to fetch"** - Check CORS settings and backend URL  
**"Error: HTTP 405"** - Backend server not running or wrong URL