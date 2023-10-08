function visualizePillars(heights, leftMax, rightMax) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  for (let i = 0; i < heights.length; i++) {
    const column = document.createElement("div");
    column.className = "column";

    const totalHeight = Math.min(leftMax[i], rightMax[i]);

    for (let j = 0; j < totalHeight; j++) {
      const box = document.createElement("div");
      if (j >= heights[i]) {
        box.className = "box blueColor";
      } else {
        box.className = "box greyColor";
      }
      column.appendChild(box);
    }

    container.appendChild(column);
  }
}

function computeWater() {
  let input = document
    .getElementById("pillars")
    .value.trim()
    .split(" ")
    .map(Number);
  let n = input.length;

  let left = new Array(n);
  let right = new Array(n);
  let water = 0;

  left[0] = input[0];
  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], input[i]);
  }

  right[n - 1] = input[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], input[i]);
  }

  for (let i = 0; i < n; i++) {
    water += Math.min(left[i], right[i]) - input[i];
  }

  visualizePillars(input, left, right);
  document.getElementById(
    "visualization"
  ).textContent = `Total trapped water: ${water} Units.`;
}
