class Solution {
    minWindow(s, t) {
        if (s === null || s.length === 0) {
            return "";
        }

        let substring = "";
        const m = s.length, n = t.length;
        const mapT = new Map();

        // O(n)
        for (let i = 0; i < n; i++) {
            const ch = t.charAt(i);
            mapT.set(ch, (mapT.get(ch) || 0) + 1);
        }

        // This is the number of unique characters in T 
        // that are required in the min substring
        const numUniqueCharsRequired = mapT.size;

        let left = 0, right = 0, numUniqueCharsFormed = 0;
        const mapS = new Map();

        let smallestWindow = -1;
        let start = -1;
        let end = -1;

        while (right < m) {
            const ch = s.charAt(right);
            if (!mapS.has(ch)) {
                mapS.set(ch, 0);
            }
            const c = (mapS.get(ch) || 0) + 1;
            mapS.set(ch, c);

            if (mapT.has(ch) && mapT.get(ch) === c) {
                numUniqueCharsFormed++;
            }

            while (left <= right && numUniqueCharsFormed === numUniqueCharsRequired) {
                const leftC = s.charAt(left);
                const currWindow = right - left + 1;
                if (smallestWindow === -1 || currWindow < smallestWindow) {
                    smallestWindow = currWindow;
                    start = left;
                    end = right;
                }

                mapS.set(leftC, (mapS.get(leftC) || 0) - 1);
                // check if the removed leftmost char
                // still matches in the current window
                if (mapT.has(leftC) && mapT.get(leftC) > mapS.get(leftC)) {
                    numUniqueCharsFormed--;
                }

                // increment the window from the left
                left++;
            }

            right++;
        }

        return smallestWindow === -1 ? "" : s.substring(start, end + 1);
    }
}
