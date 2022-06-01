
import java.util.HashSet;
import java.util.Set;

public class Solution {

    public boolean hasAllCodes(String input, int K) {
        int totalBinaryCodeOfSize_K = 1 << K;
        int sizeInput = input.length();
        if (sizeInput < totalBinaryCodeOfSize_K + K - 1) {
            return false;
        }

        Set<Integer> allBinaryCodeOfSize_K = new HashSet<>();
        int fixRollingBitmaskToSize_K = totalBinaryCodeOfSize_K - 1;
        int rollingBitmaskOfSize_K = 0;

        //initialzie rollingBitmask to size K.
        for (int i = 0; i < K; ++i) {
            rollingBitmaskOfSize_K = ((rollingBitmaskOfSize_K << 1) & fixRollingBitmaskToSize_K) | (input.charAt(i) - '0');
        }
        allBinaryCodeOfSize_K.add(rollingBitmaskOfSize_K);

        //get all subsequent rollingBitmasks of size K.
        for (int i = K; i < sizeInput && allBinaryCodeOfSize_K.size() < totalBinaryCodeOfSize_K; ++i) {
            rollingBitmaskOfSize_K = ((rollingBitmaskOfSize_K << 1) & fixRollingBitmaskToSize_K) | (input.charAt(i) - '0');
            allBinaryCodeOfSize_K.add(rollingBitmaskOfSize_K);
        }
        return allBinaryCodeOfSize_K.size() == totalBinaryCodeOfSize_K;
    }
}
