const pricing = {
  ChatGPT: {
    Free: 0,
    Plus: 20,
    Team: 30,
    Enterprise: 60,
  },

  Claude: {
    Free: 0,
    Pro: 20,
    Max: 100,
    Team: 30,
    Enterprise: 75,
  },

  Cursor: {
    Hobby: 0,
    Pro: 20,
    Team: 40,
    Enterprise: 80,
  },

  "GitHub Copilot": {
    Individual: 10,
    Business: 19,
    Enterprise: 39,
  },

  Gemini: {
    Pro: 20,
    Ultra: 250,
    API: 100,
  },

  "OpenAI API": {
    "API Direct": 500,
  },

  "Anthropic API": {
    "API Direct": 500,
  },

  v0: {
    Free: 0,
    Premium: 20,
    Team: 30,
  },
};

module.exports = pricing;