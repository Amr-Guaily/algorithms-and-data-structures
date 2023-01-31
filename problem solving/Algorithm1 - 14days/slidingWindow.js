//? 3. Longest Substring Without Repeating Characters
//EX: "abcabcbb" -- Output: 3 -- "bbbbb" -- Output: 2
function lengthOfLongestSubstring(s) {
    let set = new Set(),
        left = 0,
        maxLength = 0;

    if (s.length == 1) return 1;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

// ************* ################### *************

//? 567. Permutation in String
function checkInclusion(s1, s2) {
    // 2-edge cases
    if (s1 == s2) return true;
    if (s1.length > s2.length) return false;

    const s1Map = new Map(),
        s2Map = new Map();

    // Create 2-maps
    for (let i = 0; i < s1.length; i++) {
        s1Map.set(s1[i], s1Map.has(s1[i]) ? s1Map.get(s1[i]) + 1 : 1);
        s2Map.set(s2[i], s2Map.has(s2[i]) ? s2Map.get(s2[i]) + 1 : 1);
    }

    // Sliding Window technique
    let left = 0;
    for (let rigth = s1.length; rigth <= s2.length; rigth++) {
        // Check if 2-maps are equel:
        console.log(areMapsEqual(s1Map, s2Map));
        if (areMapsEqual(s1Map, s2Map)) return true;

        // move window:
        // Remove from left 
        if (s2Map.get(s2[left]) > 1) {
            s2Map.set(s2[left], s2Map.get(s2[left]) - 1);
        } else {
            s2Map.delete(s2[left]);
        }
        left++;
        // Add from right
        s2Map.set(s2[rigth], s2Map.has(s2[rigth]) ? s2Map.get(s2[rigth]) + 1 : 1);
    }

    return false;
}
function areMapsEqual(map1, map2) {
    if (map1.size !== map2.size) return false;

    for (let key of map1.keys()) {
        if (!map2.has(key) || map2.get(key) !== map1.get(key)) return false;
    }

    return true;
}
console.log(checkInclusion('ab', "eidbaooo"));
