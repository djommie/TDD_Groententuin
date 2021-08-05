const {
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
} = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});


// Functionaliteit 1
describe("GetCostsForPlant", () => {
    test("Get the cost for one plant", () => {
        const corn = {
            name: "corn",
            yield: 30,
            costs: 10,
        };
        expect(getCostForPlant(corn)).toBe(10)
    })
})
describe("getCostsForCrop", () => {
    test("Get the total costs for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 2,
        }
        const input = {
            crop: corn,
            numCrops: 5,
        }
        expect(getCostsForCrop(input)).toBe(10)
    })
})

// Functionaliteit 2
describe("getRevenueForPlant", () => {
    test("get the total revenue for one plant", () => {
        const corn = {
            name: "corn",
            yield: 30,
            costs: 10,
            salePrice: 5,
        }
        expect(getRevenueForPlant(corn)).toBe(150)
    })
})
describe("getRevenueForCrop", () => {
    test("get the total revenue for the whole crop", () => {
        const corn = {
            name: "corn",
            yield: 30,
            costs: 10,
            salePrice: 5,
        }
        const input = {
            crop: corn,
            numCrops: 2
        }
        expect(getRevenueForCrop(input)).toBe(300)
    })
})

// Functionaliteit 3
describe("getProfitForPlant", () => {
    test("get the total profit for one plant", () => {
        const corn = {
            name: "corn",
            yield: 30,
            costs: 10,
            salePrice: 5,
        }
        expect(getProfitForPlant(corn)).toBe(140)
    })
})
describe("getProfitForCrop", () => {
    test("Get the total profit for the whole crop", () => {
        const corn = {
            name: "corn",
            yield: 30,
            costs: 10,
            salePrice: 5,
        }
        const input = {
            crop: corn,
            numCrops: 2
        }
        expect(getProfitForCrop(input)).toBe(280)
    })
})

// Functionaliteit 4
describe("getTotalProfit", () => {
    test("Calculate the total profit with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 30,
            costs: 10,
            salePrice: 5,
        }
        const pumpkin = {
            name: "pumpkin",
            yield: 20,
            costs: 15,
            salePrice: 10,
        }
        const crops = [
            { crop: corn, numCrops: 2 },
            { crop: pumpkin, numCrops: 3 },
        ]
        expect(getTotalProfit({ crops })).toBe(835)
    })
})

// Functionaliteit 1(weer?)
describe("getYieldForPlant", () => {
    test("Calculate the total yield with one environmental factor", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        }
        const environmentFactors = {
            sun: "low",
        }
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15)
    })
})

//Functionaliteit 7 (uhm, gekke telling)

describe("getYieldForPlant", () => {
    test("Calculate the total yield for one plant with multiple environmental factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                rain: {
                    low: 20,
                    medium: 40,
                    high: 60,
                }
            },
        }
        const environmentFactors = {
            sun: "low",
            rain: "high"
        }
        expect(getYieldForPlant(corn, environmentFactors)).toBe(33)
    })
})

// Fuctionaliteit 8
describe("getYieldForPlant", () => {
    test("Calculate the total yield for one plant with multiple environmental factors, with irrelevant factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                rain: {
                    low: 20,
                    medium: 40,
                    high: 60,
                }
            },
        }
        const environmentFactors = {
            sun: "low",
            rain: "high",
            pandas: "high"
        }
        expect(getYieldForPlant(corn, environmentFactors)).toBe(33)
    })
})

// Functionaliteit 9
describe("getYieldForCrop", () => {
    test("Get the total yield for a crop, with environmental factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                rain: {
                    low: 20,
                    medium: 40,
                    high: 60,
                }
            },
        }
        const environmentFactors = {
            sun: "low",
            rain: "high",
            pandas: "high"
        }
        const input = {
            crop: corn,
            numCrops: 10,
            factors: environmentFactors
        };
        expect(getYieldForCrop(input)).toBe(330)
    })
})

// Functionaliteit 10

describe("getTotalYield", () => {
    test("Get the total yield of multiple crops, with environmental factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -20,
                    medium: 20,
                    high: 50,
                },
                rain: {
                    low: -30,
                    medium: 30,
                    high: -20,
                }
            }
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                    low: -30,
                    medium: 30,
                    high: 60,
                },
                rain: {
                    low: -30,
                    medium: 40,
                    high: -10,
                }
            }
        };
        const environmentFactors = {
            sun: "low",
            rain: "high",
            pandas: "high"
        }
        const crops = [
            { crop: corn, numCrops: 5, factors: environmentFactors },
            { crop: pumpkin, numCrops: 2, factors: environmentFactors },
        ];
        expect(getTotalYield({ crops })).toBe(13.8);
    })
    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -20,
                    medium: 20,
                    high: 50,
                },
                rain: {
                    low: -30,
                    medium: 30,
                    high: -20,
                }
            }
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                    low: -30,
                    medium: 30,
                    high: 60,
                },
                rain: {
                    low: -30,
                    medium: 40,
                    high: -10,
                }
            }
        };
        const environmentFactors = {
            sun: "low",
            rain: "high",
            pandas: "high"
        }
        const crops = [
            { crop: corn, numCrops: 0, factors: environmentFactors },
            { crop: pumpkin, numCrops: 0, factors: environmentFactors },
        ];
        expect(getTotalYield({ crops })).toBe(0);
    })
})

// Functionaliteit 11
describe("getRevenueForPlant", () => {
    test("get the total revenue for one plant, with factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            costs: 10,
            salePrice: 5,
            factors: {
                sun: {
                    low: -30,
                    medium: 30,
                    high: 60,
                },
                rain: {
                    low: -30,
                    medium: 40,
                    high: -10,
                }
            }
        }
        const environmentFactors = {
            sun: "low",
            rain: "high",
            pandas: "high"
        }
        expect(getRevenueForPlant(corn, environmentFactors)).toBe(90)
    })
})

describe("getRevenueForCrop", () => {
    test("get the total revenue for one crop, with factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            costs: 10,
            salePrice: 5,
            factors: {
                sun: {
                    low: -30,
                    medium: 30,
                    high: 60,
                },
                rain: {
                    low: -30,
                    medium: 40,
                    high: -10,
                }
            }
        }
        const environmentFactors = {
            sun: "low",
            rain: "high",
            pandas: "high"
        }
        const input = {
            crop: corn,
            numCrops: 3,
            factors: environmentFactors
        }
        expect(getRevenueForCrop(input)).toBe(270)
    })
})

// Functionaliteit 12
describe("getProfitForPlant", () => {
    test("get the total profit for one plant, with factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            costs: 10,
            salePrice: 5,
            factors: {
                sun: {
                    low: -30,
                    medium: 30,
                    high: 60,
                },
                rain: {
                    low: -30,
                    medium: 40,
                    high: -10,
                }
            }
        }
        const environmentFactors = {
            sun: "low",
            rain: "high",
            pandas: "high"
        }
        expect(getProfitForPlant(corn, environmentFactors)).toBe(80)
    })
})

describe("getProfitForCrop", () => {
    test("get the total profit for one crop, with factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            costs: 10,
            salePrice: 5,
            factors: {
                sun: {
                    low: -30,
                    medium: 30,
                    high: 60,
                },
                rain: {
                    low: -30,
                    medium: 40,
                    high: -10,
                }
            }
        }
        const environmentFactors = {
            sun: "low",
            rain: "high",
            pandas: "high"
        }
        const input = {
            crop: corn,
            numCrops: 3,
            factors: environmentFactors
        }
        expect(getProfitForCrop(input)).toBe(240)
    })
})

// Functionaliteit 13
describe("getTotalProfit", () => {
    test("Get the total profit of multiple crops, with environmental factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 10,
            salePrice: 5,
            factors: {
                sun: {
                    low: -20,
                    medium: 20,
                    high: 50,
                },
                rain: {
                    low: -30,
                    medium: 30,
                    high: 20,
                }
            }
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 2,
            costs: 20,
            salePrice: 12,
            factors: {
                sun: {
                    low: -30,
                    medium: 30,
                    high: 60,
                },
                rain: {
                    low: -30,
                    medium: 40,
                    high: 10,
                }
            }
        };
        const environmentFactors = {
            sun: "low",
            rain: "high",
            pandas: "high"
        }
        const crops = [
            { crop: corn, numCrops: 5, factors: environmentFactors },
            { crop: pumpkin, numCrops: 2, factors: environmentFactors },
        ];
        expect(getTotalProfit({ crops })).toBe(23);
    })
})