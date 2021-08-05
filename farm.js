// Eerste test
const getYieldForPlant = (plant, factors) => {
    if (factors) {
        let totalFactor = 0
        if (factors.sun) {
            const factorSun = factors.sun
            totalFactor += (plant.yield * (plant.factors.sun[factorSun] / 100))
        }
        if (factors.rain) {
            const factorRain = factors.rain
            totalFactor += (plant.yield * (plant.factors.rain[factorRain] / 100))
        }
        return plant.yield + totalFactor
    } else {
        return plant.yield
    }
}

//Tweede test
const getYieldForCrop = input => {
    return getYieldForPlant(input.crop, input.factors) * input.numCrops
}

// Derde test
const getTotalYield = ({ crops }) => {
    let total = 0;
    crops.forEach(crop => total += getYieldForCrop(crop));
    return total;
};

// functionaliteit 1.
const getCostForPlant = (input) => input.costs

const getCostsForCrop = (input) => {
    const costForPlant = getCostForPlant(input.crop)
    return costForPlant * input.numCrops
}

//Functionaliteit 2.
const getRevenueForPlant = (crop, factors) => {
    const plantYield = getYieldForPlant(crop, factors)
    return plantYield * crop.salePrice
}

const getRevenueForCrop = (input) => {
    const revenueForPlant = getRevenueForPlant(input.crop, input.factors)
    return revenueForPlant * input.numCrops
}

// Functionaliteit 3.
const getProfitForPlant = (crop, factors) => {
    revenueForPlant = getRevenueForPlant(crop, factors)
    costForPlant = getCostForPlant(crop)
    return revenueForPlant - costForPlant
}

const getProfitForCrop = (input) => {
    profitForPlant = getProfitForPlant(input.crop, input.factors)
    return profitForPlant * input.numCrops
}

// Functionaliteit 4.
const getTotalProfit = ({ crops }) => {
    let total = 0;
    crops.forEach(crop => {
        return total += getProfitForCrop(crop)
    });
    return Math.round(total);
}


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostForPlant,
    getCostsForCrop,
    getRevenueForPlant,
    getRevenueForCrop,
    getProfitForPlant,
    getProfitForCrop,
    getTotalProfit,
}