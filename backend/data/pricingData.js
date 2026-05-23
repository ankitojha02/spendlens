const pricing = {
  ChatGPT: {
    Free: 0,
    Plus: 20,
    Team: 30,
    Enterprise: 60,
    "API Direct": 25,
  },

  Claude: {
    Free: 0,
    Pro: 20,
    Max: 100,
    Team: 30,
    Enterprise: 60,
    "API Direct": 25,
  },

  Cursor: {
    Hobby: 0,
    Pro: 20,
    Business: 40,
    Enterprise: 60,
  },

  "GitHub Copilot": {
    Individual: 10,
    Business: 19,
    Enterprise: 39,
  },

  Gemini: {
    Pro: 20,
    Ultra: 50,
    API: 25,
  },

  "Anthropic API": {
    "API Direct": 25,
  },

  "OpenAI API": {
    "API Direct": 30,
  },

  v0: {
    Free: 0,
    Premium: 20,
  },
};

module.exports = pricing;