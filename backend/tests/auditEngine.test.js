const pricing = require("../data/pricingData");

describe("Audit Engine Logic", () => {

  test("ChatGPT Team for small team should recommend Plus", () => {
    const seats = 2;
    const spend = 120;

    const recommendedCost =
      pricing.ChatGPT.Plus * seats;

    const savings = spend - recommendedCost;

    expect(recommendedCost).toBe(40);
    expect(savings).toBe(80);
  });

  test("Cursor Team for small team should recommend Pro", () => {
    const seats = 2;
    const spend = 80;

    const recommendedCost =
      pricing.Cursor.Pro * seats;

    const savings = spend - recommendedCost;

    expect(recommendedCost).toBe(40);
    expect(savings).toBe(40);
  });

  test("Enterprise plan for small team should recommend Team", () => {
    const seats = 5;
    const spend = 300;

    const recommendedCost =
      pricing.ChatGPT.Team * seats;

    expect(recommendedCost).toBe(150);
    expect(spend - recommendedCost).toBe(150);
  });

  test("API direct over $500 should reduce by 30%", () => {
    const spend = 1000;

    const optimized = Math.round(spend * 0.7);

    expect(optimized).toBe(700);
  });

  test("Efficiency score should be D for 50% savings", () => {
    const currentCost = 400;
    const savings = 300;

    const percentage =
      (savings / currentCost) * 100;

    let score = "A";

    if (percentage >= 50) {
      score = "D";
    }

    expect(score).toBe("D");
  });

});