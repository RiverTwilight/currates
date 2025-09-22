function convertToNumeric(amountStr) {
	let amount;
	// Handle different number formats
	if (amountStr.includes('.') && amountStr.includes(',')) {
		// Check if it's European format (dots as thousand separators, comma as decimal)
		// European: 1.234.567,89 - last separator is comma
		// American: 1,234,567.89 - last separator is dot
		let lastCommaIndex = amountStr.lastIndexOf(',');
		let lastDotIndex = amountStr.lastIndexOf('.');
		
		if (lastCommaIndex > lastDotIndex) {
			// European format: dots as thousand separators, comma as decimal
			amount = amountStr.replace(/\./g, '').replace(',', '.');
		} else {
			// American format: commas as thousand separators, dot as decimal
			amount = amountStr.replace(/,/g, "");
		}
	} else if (amountStr.includes("'")) {
		// Swiss format: apostrophes as thousand separators
		amount = amountStr.replace(/'/g, "");
	} else {
		// Standard format: remove commas (thousand separators)
		amount = amountStr.replace(/,/g, "");
	}

	// Convert words like 'billion', 'million' to numeric values
	let multiplier = 1;
	if (amount.match(/billion|b$/i)) {
		multiplier = 1e9;
	} else if (amount.match(/million|m$/i)) {
		multiplier = 1e6;
	} else if (amount.match(/thousand|k$/i)) {
		multiplier = 1e3;
	}
	amount = amount.replace(/(billion|million|thousand|[kmb])$/i, "").trim();

	// Parse the numeric value
	return parseFloat(amount) * multiplier;
}

function convertAmount(amountStr, originalCurrency, targetCurrency, rates) {
	let value = parseFloat(amountStr);
	return (value / rates[originalCurrency]) * rates[targetCurrency];
}

// https://www.xe.com/symbols/
function getSymbol(currency) {
	return {
		EUR: "€",
		USD: "$",
		CNY: "¥",
		JPY: "¥",
		AFN: "؋",
		EGP: "£",
		PHP: "₱",
		CUP: "₱",
	}[currency];
}

function convertTo2Float(num) {
	return Math.floor(num * 100) / 100;
}

function extractAmount(rawText) {
	// Regex for special currency symbols like A$, CA$, etc.
	let specialSymbolRegex = /((CA\$|A\$|CHF)\s*(\d+(?:,\d{3})*(?:\.\d+)?\s?(?:billion|million|thousand|[kmb])?))/i;
	// Regex for basic currencies starting with a symbol, including commas and European formats  
	let symbolRegex = /([\$¥£€₩]\s*(\d+(?:[,.']\d+)*\s?(?:billion|million|thousand|[kmb])?))/i;
	// Regex for currencies ending with a word, including large number words and Chinese characters
	let wordRegex =
		/((\d+(?:,\d{3})*(?:\.\d+)?\s?(?:billion|million|thousand|[kmb])?)\s*(euros|euro|dollars|dollar|RMB|元|yen|yuan|pounds|USD|EUR|GBP|CNY|JPY|KRW|CHF|AUD|CAD))/i;
	// Regex for currency codes before numbers (e.g., "RMB 1000", "USD 500")
	let prefixRegex =
		/((USD|EUR|GBP|CNY|JPY|KRW|CHF|AUD|CAD|RMB)\s+(\d+(?:,\d{3})*(?:\.\d+)?\s?(?:billion|million|thousand|[kmb])?))/i;

	let specialSymbolMatch = rawText.match(specialSymbolRegex);
	let symbolMatch = rawText.match(symbolRegex);
	let wordMatch = rawText.match(wordRegex);
	let prefixMatch = rawText.match(prefixRegex);

	let amountMatched = specialSymbolMatch
		? specialSymbolMatch[3]
		: symbolMatch
		? symbolMatch[2]
		: wordMatch
		? wordMatch[2]
		: prefixMatch
		? prefixMatch[3]
		: null;

	let textMatched = specialSymbolMatch
		? specialSymbolMatch[0]
		: symbolMatch
		? symbolMatch[0]
		: wordMatch
		? wordMatch[0]
		: prefixMatch
		? prefixMatch[0]
		: null;

	if (!textMatched || !amountMatched) {
		return null;
	}

	// console.log("SymbolMatch: ", symbolMatch);
	// console.log("WordMatch: ", wordMatch);
	// console.log("PrefixMatch: ", prefixMatch);
	// console.log("AmountMatch: ", amountMatched);

	let currency = "USD";

	if (textMatched.match(/(CA\$|CAD)/i)) {
		currency = "CAD";
	} else if (textMatched.match(/(A\$|AUD)/i)) {
		currency = "AUD";
	} else if (textMatched.match(/(dollar|dollars|\$|USD)/i)) {
		currency = "USD";
	} else if (textMatched.match(/(euro|euros|€|EUR)/i)) {
		currency = "EUR";
	} else if (textMatched.match(/(yen|¥|JPY)/i)) {
		currency = "JPY";
	} else if (textMatched.match(/(₩|KRW)/i)) {
		currency = "KRW";
	} else if (textMatched.match(/(元|yuan|RMB|CNY)/i)) {
		currency = "CNY";
	} else if (textMatched.match(/(pounds|£|GBP)/i)) {
		currency = "GBP";
	} else if (textMatched.match(/(CHF)/i)) {
		currency = "CHF";
	}

	return {
		currency,
		amount: convertToNumeric(amountMatched),
	};
}

export {
	convertAmount,
	convertTo2Float,
	convertToNumeric,
	extractAmount,
	getSymbol,
};
