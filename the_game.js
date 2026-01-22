// Dice number generator and skill points

const rollStatusDice = (targetId) => {
    let diceResult = Math.floor(Math.random() * 6);
        console.log(diceResult + 1);
        // Status bonus
        if (diceResult === 1) {
            statBonus = 0;
        } else if (diceResult >= 2 && diceResult <= 4) {
            statBonus = 1;
        } else if (diceResult >= 5) {
            statBonus = 2;
        }
        let totalStatus = diceResult + statBonus;
        document.getElementById(targetId).value = totalStatus;
}

// Dice result evaluator
//D10 - tests
    const rollD10 = () => {
        let d10Result = Math.floor(Math.random() * 10) + 1;
        if (d10Result === 1) {
            console.log(`${d10Result}! It's a critical failure!`);
        } else if (d10Result === 10) {
            console.log(`${d10Result}! It's a critical success!`);
        } else if (d10Result >= 2 && d10Result <= 5) {
            console.log(`${d10Result}! Failure!`);
        } else if (d10Result >= 6 && d10Result <= 9) {
            console.log(`${d10Result}! Success!`);
        }
    }
    rollD10();
//D6 - damage
    const rollD6 = () => {
        let rollD6 = Math.floor(Math.random() * 6) + statBonus;
        console.log(`Attack = ${rollD6 + statBonus}`);
    }
    rollD6();
