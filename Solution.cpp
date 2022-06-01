
#include <string>
#include <unordered_set>
using namespace std;

class Solution {
    
public:
    bool hasAllCodes(string input, int K) {
        int totalBinaryCodeOfSize_K = 1 << K;
        int sizeInput = input.length();
        if (sizeInput < totalBinaryCodeOfSize_K + K - 1) {
            return false;
        }

        unordered_set<int> allBinaryCodeOfSize_K;
        int fixRollingBitmaskToSize_K = totalBinaryCodeOfSize_K - 1;
        int rollingBitmaskOfSize_K = 0;

        //initialzie rollingBitmask to size K.
        for (int i = 0; i < K; ++i) {
            rollingBitmaskOfSize_K = ((rollingBitmaskOfSize_K << 1) & fixRollingBitmaskToSize_K) | (input[i] - '0');
        }
        allBinaryCodeOfSize_K.insert(rollingBitmaskOfSize_K);

        //get all subsequent rollingBitmasks of size K.
        for (int i = K; i < sizeInput && allBinaryCodeOfSize_K.size() < totalBinaryCodeOfSize_K; ++i) {
            rollingBitmaskOfSize_K = ((rollingBitmaskOfSize_K << 1) & fixRollingBitmaskToSize_K) | (input[i] - '0');
            allBinaryCodeOfSize_K.insert(rollingBitmaskOfSize_K);
        }
        return allBinaryCodeOfSize_K.size() == totalBinaryCodeOfSize_K;
    }
};
