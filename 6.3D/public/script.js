const icecreamSalesList = [
    { name: "Vanilla", bestState: 'VIC', totalSold: 78923 },
    { name: "Chocolate", bestState: 'SA', totalSold: 23001 },
    { name: "Cookies 'n Cream", bestState: 'NT', totalSold: 43010 },
    { name: "Strawberry", bestState: 'VIC', totalSold: 29221 },
    { name: "Chocolate Chip", bestState: 'WA', totalSold: 62133 },
    { name: "Mint Chocolate Chip", bestState: 'TAS', totalSold: 12075 },
    { name: "Chocolate Chip Cookie Dough", bestState: 'NSW', totalSold: 39992 },
    { name: "Butter Pecan", bestState: 'ACT', totalSold: 45012 },
    { name: "Birthday Cake", bestState: 'QLD', totalSold: 3001 },
    { name: "Moose Tracks", bestState: 'WA', totalSold: 59004 }
];

function getFullStateName(stateAbbr) {
    switch (stateAbbr) {
        case 'VIC': return 'Victoria';
        case 'SA': return 'South Australia';
        case 'NT': return 'Northern Territory';
        case 'WA': return 'Western Australia';
        case 'TAS': return 'Tasmania';
        case 'NSW': return 'New South Wales';
        case 'ACT': return 'Australian Capital Territory';
        case 'QLD': return 'Queensland';
        default: return 'Unknown State';
    }
}

function getSalesCategory(totalSold) {
    if (totalSold >= 55000) {
        return 'Outstanding';
    } else if (totalSold >= 35000) {
        return 'Fantastic';
    } else if (totalSold >= 25000) {
        return 'Great';
    } else if (totalSold >= 15000) {
        return 'Pretty Good';
    } else {
        return 'Below Average';
    }
}

function generateReport() {
    let totalSales = 0;
    let maxSales = -1;
    let minSales = Infinity;
    let bestSellingIceCream = null;
    let worstSellingIceCream = null;

    let tableHTML = `
        <p>The following table has been dynamically generated from JSON data:</p>
        <table>
            <thead>
                <tr>
                    <th>Ice Cream Name</th>
                    <th>Best State</th>
                    <th>Total Sold</th>
                    <th>Sales Category</th>
                </tr>
            </thead>
            <tbody>
    `;

    icecreamSalesList.forEach(icecream => {
        tableHTML += `
            <tr>
                <td>${icecream.name}</td>
                <td>${getFullStateName(icecream.bestState)}</td>
                <td>${icecream.totalSold}</td>
                <td>${getSalesCategory(icecream.totalSold)}</td>
            </tr>
        `;

        totalSales += icecream.totalSold;

        if (icecream.totalSold > maxSales) {
            maxSales = icecream.totalSold;
            bestSellingIceCream = icecream;
        }

        if (icecream.totalSold < minSales) {
            minSales = icecream.totalSold;
            worstSellingIceCream = icecream;
        }
    });

    tableHTML += `</tbody></table>`;

    const averageSales = totalSales / icecreamSalesList.length;
    const averageSalesCategory = getSalesCategory(averageSales);

    const summaryHTML = `
        <div id="summary-stats">
            <h3>Some statistics on the icecreams sold across all types:</h3>
            <ul>
                <li><strong>Best selling icecream:</strong> ${bestSellingIceCream.name} with ${bestSellingIceCream.totalSold} sold</li>
                <li><strong>Worst selling icecream:</strong> ${worstSellingIceCream.name} with ${worstSellingIceCream.totalSold} sold</li>
                <li><strong>Average number of icecreams sold:</strong> ${averageSales.toFixed(1)} which equates to a sales category of <strong>${averageSalesCategory}</strong></li>
            </ul>
            <p>Averages calculated from summing up all the totalSold dividing by the total number of icecreams in the list.</p>
        </div>
    `;

    const reportContainer = document.getElementById('report-content');
    reportContainer.innerHTML = tableHTML + summaryHTML;
}

document.getElementById('generate-report-btn').addEventListener('click', generateReport);