// Your JS code here
const prices = {
    meal_kit: {
      1: 60,
      6: 330,
      12: 600
    },
    gym_membership: {
      1: 50,
      6: 270,
      12: 500
    },
    fitness_app: {
      1: 10,
      6: 50,
      12: 90
    },
    magazine: {
        1: 8,
        6: 40,
        12: 75 // Example pricing
    },
    movie_channel: {
        1: 12,
        6: 60,
        12: 110 // Example pricing
    },
    music_streaming: {
        1: 9,
        6: 45,
        12: 85 // Example pricing
    },
    cloud_storage: {
        1: 7,
        6: 35,
        12: 65 // Example pricing
    }
  };
  
  var subTypeElement = document.querySelector("#subscription");
  var subDurationElement = document.querySelector("#months");
  var result = document.querySelector(".result");
  
  // Removed the initial subType and subDuration variables as they are now read directly
  // in the updateSubscriptionDiv function when needed.
  // var subType = "basic";
  // var subDuration = 1;
  
  
  // 3. Create a Calculation Function
  // This function reads the selected values, calculates the price using the 'prices' object,
  // and updates the display with a more descriptive message.
  var updateSubscriptionDiv = function () {
    // Get the selected values from the dropdowns directly when the function is called.
    var subType = subTypeElement.value; // Get current value
    var subDuration = parseInt(subDurationElement.value); // Get and parse current value to integer
  
    // Look up the total price for the selected plan and duration.
    var total = prices[subType][subDuration];
  
    // Get the visible text of the selected subscription option (e.g., "Meal Kit", "Movie Channel").
    const subTypeText = subTypeElement.options[subTypeElement.selectedIndex].text;
  
    // --- Construct the base message ---
    let message = `You selected: a ${subDuration}-month ${subTypeText} plan for $${total}.`;
  
    // --- Calculate and display savings for durations > 1 month ---
    if (subDuration > 1) {
        // Get the price of the 1-month option for the current subscription type
        const oneMonthPrice = prices[subType][1];
  
        // Calculate the theoretical cost if paying month-to-month for the selected duration
        const monthlyCostEquivalent = oneMonthPrice * subDuration;
  
        // Calculate the savings
        const savings = monthlyCostEquivalent - total;
  
        // If there are savings, add a newline and the savings message wrapped in a <span>
        if (savings > 0) {
            // Changed from innerText to innerHTML, adding a <span> with a class
            message += `\n<span class="savings-highlight">You save $${savings}!</span>`;
        }
    }
  
    // Update the content of the result paragraph using innerHTML
    result.innerHTML = message;
  
  };

// 4. Add Event Listeners
// We keep your existing event listeners. They correctly call updateSubscriptionDiv
// whenever a change occurs in either dropdown.
subTypeElement.addEventListener("change", updateSubscriptionDiv);

subDurationElement.addEventListener("change", updateSubscriptionDiv);

// 5. Perform Initial Calculation on Page Load
// Call the update function once when the script loads to display the correct
// price for the initially selected options.
updateSubscriptionDiv();