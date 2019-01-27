'use strict';

module.exports = {
    lexicalDensity: (words) => {
        let lexic_count = 0;
        const non_lexical = [
            "to", "got", "is", "have", "and", "although", "or", "that", "when", "while", "a", "either", "more", "much", "neither", "my", "that",
            "the", "as", "no", "nor", "not", "at", "between", "in", "of", "without", "I", "you", "he", "she", "it", "we", "they", "anybody", "one"
        ]
        // Remove the empty strings created by split
        const index = words.indexOf('');
        if (index > -1) {
            words.splice(index, 1);
        }
        words.forEach(word => {
            if (!non_lexical.includes(word)) {
                lexic_count++;
            }
        });
        const density = lexic_count / words.length;
        const finalRes = parseFloat(density).toFixed(2);
        return finalRes;
    },

}