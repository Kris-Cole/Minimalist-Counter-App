// JavaScript to power the Counter App
document.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.getElementById("counter");
    const incrementBtn = document.getElementById("increment");
    const decrementBtn = document.getElementById("decrement");
    const resetBtn = document.getElementById("reset");
    const stepInput = document.getElementById("step");
    const startInput = document.getElementById("start-value");
    const minInput = document.getElementById("min-value");
    const maxInput = document.getElementById("max-value");

    let counterValue = 0;

    // Function to update the counter display
    const updateDisplay = () => {
        counterDisplay.textContent = counterValue;
    };

    // Increment function
    incrementBtn.addEventListener("click", () => {
        const step = parseInt(stepInput.value, 10) || 1;
        const maxValue = parseInt(maxInput.value, 10);
        if (counterValue + step <= maxValue || isNaN(maxValue)) {
            counterValue += step;
            updateDisplay();
        }
    });

    // Decrement function
    decrementBtn.addEventListener("click", () => {
        const step = parseInt(stepInput.value, 10) || 1;
        const minValue = parseInt(minInput.value, 10);
        if (counterValue - step >= minValue || isNaN(minValue)) {
            counterValue -= step;
            updateDisplay();
        }
    });

    // Reset function
    resetBtn.addEventListener("click", () => {
        counterValue = parseInt(startInput.value, 10) || 0;
        updateDisplay();
    });

    // Start value input update
    startInput.addEventListener("change", () => {
        counterValue = parseInt(startInput.value, 10) || 0;
        updateDisplay();
    });
});
