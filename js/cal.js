console.log("JS loaded");
// ===================================
// GLOBAL VARIABLES
// ===================================

// Stores the current display value
let currentDisplay = '';

// Stores the calculation being performed
let currentCalculation = '';

// Array to store calculation history
let history = [];

// ===================================
// DISPLAY FUNCTIONS
// ===================================

// Function to append value to display
// This adds numbers or operators to the screen
function appendToDisplay(value) {
    // Add the value to current display string
    currentDisplay += value;
    
    // Update the result display on screen
    document.getElementById('result').textContent = currentDisplay || '0';
    
    // Update the calculation display
    currentCalculation = currentDisplay;
    document.getElementById('calculation').textContent = currentCalculation;
}

// Function to clear the entire display
// Resets everything to initial state
function clearDisplay() {
    // Reset current display to empty
    currentDisplay = '';
    
    // Reset calculation to empty
    currentCalculation = '';
    
    // Update both displays to show 0
    document.getElementById('result').textContent = '0';
    document.getElementById('calculation').textContent = '';
}

// Function to delete the last character
// Like a backspace button
function deleteLast() {
    // Remove the last character using slice
    currentDisplay = currentDisplay.slice(0, -1);
    
    // Update the display (show 0 if empty)
    document.getElementById('result').textContent = currentDisplay || '0';
    
    // Update calculation display
    currentCalculation = currentDisplay;
    document.getElementById('calculation').textContent = currentCalculation;
}

// ===================================
// CALCULATION FUNCTIONS
// ===================================

// Main calculate function for basic operations
// This evaluates the mathematical expression
function calculate() {
    try {
        // If display is empty, do nothing
        if (currentDisplay === '') {
            return;
        }
        
        // Store the original calculation for history
        let calculation = currentDisplay;
        
        // Use eval() to calculate the result
        // eval() evaluates a string as JavaScript code
        let result = eval(currentDisplay);
        
        // Round the result to 10 decimal places to avoid floating point errors
        result = Math.round(result * 10000000000) / 10000000000;
        
        // Add to history
        addToHistory(calculation + ' = ' + result);
        
        // Update display with result
        document.getElementById('result').textContent = result;
        document.getElementById('calculation').textContent = calculation + ' =';
        
        // Set current display to result for further calculations
        currentDisplay = result.toString();
        
    } catch (error) {
        // If there's an error in calculation, show error message
        document.getElementById('result').textContent = 'Error';
        document.getElementById('calculation').textContent = '';
        currentDisplay = '';
    }
}

// ===================================
// ADVANCED MATH FUNCTIONS
// ===================================

// Calculate power (x^y)
// Raises current number to a power
function calculatePower() {
    try {
        // If display is empty, do nothing
        if (currentDisplay === '') {
            return;
        }
        
        // Get the base number
        let base = parseFloat(currentDisplay);
        
        // Ask user for the exponent
        let exponent = prompt('Enter the exponent (power):');
        
        // If user cancels, do nothing
        if (exponent === null) {
            return;
        }
        
        // Convert exponent to number
        exponent = parseFloat(exponent);
        
        // Calculate power using Math.pow()
        let result = Math.pow(base, exponent);
        
        // Store calculation for history
        let calculation = base + '^' + exponent;
        
        // Add to history
        addToHistory(calculation + ' = ' + result);
        
        // Update display
        document.getElementById('result').textContent = result;
        document.getElementById('calculation').textContent = calculation + ' =';
        
        // Set current display to result
        currentDisplay = result.toString();
        
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
        currentDisplay = '';
    }
}

// Calculate square root
// Finds the square root of current number
function calculateSquareRoot() {
    try {
        // If display is empty, do nothing
        if (currentDisplay === '') {
            return;
        }
        
        // Get the number
        let number = parseFloat(currentDisplay);
        
        // Check if number is negative
        if (number < 0) {
            document.getElementById('result').textContent = 'Error: Negative';
            currentDisplay = '';
            return;
        }
        
        // Calculate square root using Math.sqrt()
        let result = Math.sqrt(number);
        
        // Store calculation for history
        let calculation = '√' + number;
        
        // Add to history
        addToHistory(calculation + ' = ' + result);
        
        // Update display
        document.getElementById('result').textContent = result;
        document.getElementById('calculation').textContent = calculation + ' =';
        
        // Set current display to result
        currentDisplay = result.toString();
        
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
        currentDisplay = '';
    }
}

// Calculate modulus (remainder)
// Finds remainder when dividing
function calculateModulus() {
    try {
        // If display is empty, do nothing
        if (currentDisplay === '') {
            return;
        }
        
        // Get first number
        let num1 = parseFloat(currentDisplay);
        
        // Ask user for second number
        let num2 = prompt('Divide by:');
        
        // If user cancels, do nothing
        if (num2 === null) {
            return;
        }
        
        // Convert to number
        num2 = parseFloat(num2);
        
        // Check for division by zero
        if (num2 === 0) {
            document.getElementById('result').textContent = 'Error: Div by 0';
            currentDisplay = '';
            return;
        }
        
        // Calculate modulus using % operator
        let result = num1 % num2;
        
        // Store calculation for history
        let calculation = num1 + ' % ' + num2;
        
        // Add to history
        addToHistory(calculation + ' = ' + result);
        
        // Update display
        document.getElementById('result').textContent = result;
        document.getElementById('calculation').textContent = calculation + ' =';
        
        // Set current display to result
        currentDisplay = result.toString();
        
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
        currentDisplay = '';
    }
}

// ===================================
// SCIENTIFIC FUNCTIONS
// ===================================

// Calculate factorial (n!)
// Example: 5! = 5 × 4 × 3 × 2 × 1 = 120
function calculateFactorial() {
    try {
        // If display is empty, do nothing
        if (currentDisplay === '') {
            return;
        }
        
        // Get the number
        let number = parseFloat(currentDisplay);
        
        // Check if number is negative
        if (number < 0) {
            document.getElementById('result').textContent = 'Error: Negative';
            currentDisplay = '';
            return;
        }
        
        // Check if number is not an integer
        if (!Number.isInteger(number)) {
            document.getElementById('result').textContent = 'Error: Not Integer';
            currentDisplay = '';
            return;
        }
        
        // Calculate factorial
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        
        // Store calculation for history
        let calculation = number + '!';
        
        // Add to history
        addToHistory(calculation + ' = ' + result);
        
        // Update display
        document.getElementById('result').textContent = result;
        document.getElementById('calculation').textContent = calculation + ' =';
        
        // Set current display to result
        currentDisplay = result.toString();
        
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
        currentDisplay = '';
    }
}

// Calculate absolute value |x|
// Returns positive version of number
function calculateAbsolute() {
    try {
        // If display is empty, do nothing
        if (currentDisplay === '') {
            return;
        }
        
        // Get the number
        let number = parseFloat(currentDisplay);
        
        // Calculate absolute value using Math.abs()
        let result = Math.abs(number);
        
        // Store calculation for history
        let calculation = '|' + number + '|';
        
        // Add to history
        addToHistory(calculation + ' = ' + result);
        
        // Update display
        document.getElementById('result').textContent = result;
        document.getElementById('calculation').textContent = calculation + ' =';
        
        // Set current display to result
        currentDisplay = result.toString();
        
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
        currentDisplay = '';
    }
}

// Calculate sine
// Returns sine of angle (in degrees)
function calculateSin() {
    try {
        if (currentDisplay === '') {
            return;
        }
        
        let degrees = parseFloat(currentDisplay);
        
        // Convert degrees to radians (Math.sin uses radians)
        let radians = degrees * (Math.PI / 180);
        
        // Calculate sine
        let result = Math.sin(radians);
        
        // Round to avoid floating point errors
        result = Math.round(result * 10000000000) / 10000000000;
        
        let calculation = 'sin(' + degrees + '°)';
        addToHistory(calculation + ' = ' + result);
        
        document.getElementById('result').textContent = result;
        document.getElementById('calculation').textContent = calculation + ' =';
        currentDisplay = result.toString();
        
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
        currentDisplay = '';
    }
}

// Calculate cosine
// Returns cosine of angle (in degrees)
function calculateCos() {
    try {
        if (currentDisplay === '') {
            return;
        }
        
        let degrees = parseFloat(currentDisplay);
        let radians = degrees * (Math.PI / 180);
        let result = Math.cos(radians);
        result = Math.round(result * 10000000000) / 10000000000;
        
        let calculation = 'cos(' + degrees + '°)';
        addToHistory(calculation + ' = ' + result);
        
        document.getElementById('result').textContent = result;
        document.getElementById('calculation').textContent = calculation + ' =';
        currentDisplay = result.toString();
        
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
        currentDisplay = '';
    }
}

// Calculate tangent
// Returns tangent of angle (in degrees)
function calculateTan() {
    try {
        if (currentDisplay === '') {
            return;
        }
        
        let degrees = parseFloat(currentDisplay);
        let radians = degrees * (Math.PI / 180);
        let result = Math.tan(radians);
        result = Math.round(result * 10000000000) / 10000000000;
        
        let calculation = 'tan(' + degrees + '°)';
        addToHistory(calculation + ' = ' + result);
        
        document.getElementById('result').textContent = result;
        document.getElementById('calculation').textContent = calculation + ' =';
        currentDisplay = result.toString();
        
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
        currentDisplay = '';
    }
}

// Calculate logarithm (base 10)
// Returns log10 of number
function calculateLog() {
    try {
        if (currentDisplay === '') {
            return;
        }
        
        let number = parseFloat(currentDisplay);
        
        // Check if number is positive (can't take log of negative or zero)
        if (number <= 0) {
            document.getElementById('result').textContent = 'Error: Must be > 0';
            currentDisplay = '';
            return;
        }
        
        // Calculate log base 10 using Math.log10()
        let result = Math.log10(number);
        result = Math.round(result * 10000000000) / 10000000000;
        
        let calculation = 'log(' + number + ')';
        addToHistory(calculation + ' = ' + result);
        
        document.getElementById('result').textContent = result;
        document.getElementById('calculation').textContent = calculation + ' =';
        currentDisplay = result.toString();
        
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
        currentDisplay = '';
    }
}

// ===================================
// TAB SWITCHING FUNCTIONS
// ===================================

// Function to switch between calculator tabs
// Shows the selected tab and hides others
function showTab(tabName) {
    // Get all tab content elements
    let tabContents = document.getElementsByClassName('tab-content');
    
    // Loop through and hide all tabs
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    
    // Get all tab buttons
    let tabButtons = document.getElementsByClassName('tab-button');
    
    // Loop through and deactivate all buttons
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    
    // Show the selected tab
    document.getElementById(tabName + '-tab').classList.add('active');
    
    // Activate the corresponding button
    event.target.classList.add('active');
}

// ===================================
// HISTORY FUNCTIONS
// ===================================

// Function to add calculation to history
// Stores and displays past calculations
function addToHistory(calculation) {
    // Add calculation to history array
    history.push(calculation);
    
    // Keep only last 10 calculations
    if (history.length > 10) {
        history.shift(); // Remove oldest calculation
    }
    
    // Update history display
    updateHistoryDisplay();
}

// Function to update the history display on screen
function updateHistoryDisplay() {
    // Get the history list element
    let historyList = document.getElementById('history-list');
    
    // Clear current history display
    historyList.innerHTML = '';
    
    // If no history, show message
    if (history.length === 0) {
        historyList.innerHTML = '<p style="color: #888; text-align: center;">No history yet</p>';
        return;
    }
    
    // Loop through history array in reverse (newest first)
    for (let i = history.length - 1; i >= 0; i--) {
        // Create a div for each history item
        let historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.textContent = history[i];
        
        // Add click event to reuse calculation
        historyItem.onclick = function() {
            // Extract the result from history item
            let parts = history[i].split(' = ');
            if (parts.length > 1) {
                currentDisplay = parts[1];
                document.getElementById('result').textContent = currentDisplay;
            }
        };
        
        // Add to history list
        historyList.appendChild(historyItem);
    }
}

// Function to clear all history
function clearHistory() {
    // Empty the history array
    history = [];
    
    // Update the display
    updateHistoryDisplay();
}

// ===================================
// KEYBOARD SUPPORT
// ===================================

// Add keyboard support for typing numbers and operators
document.addEventListener('keydown', function(event) {
    // Get the key that was pressed
    let key = event.key;
    
    // Check if it's a number or decimal point
    if (key >= '0' && key <= '9' || key === '.') {
        appendToDisplay(key);
    }
    // Check if it's an operator
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    }
    // Check if Enter key (calculate)
    else if (key === 'Enter' || key === '=') {
        calculate();
    }
    // Check if Backspace key (delete)
    else if (key === 'Backspace') {
        deleteLast();
    }
    // Check if Escape key (clear)
    else if (key === 'Escape') {
        clearDisplay();
    }
});

// ===================================
// INITIALIZATION
// ===================================

// Initialize the calculator when page loads
window.onload = function() {
    // Set initial display to 0
    document.getElementById('result').textContent = '0';
    
    // Initialize empty history
    updateHistoryDisplay();
};