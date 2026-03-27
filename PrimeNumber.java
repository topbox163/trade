import java.util.ArrayList;
import java.util.List;

public class PrimeNumber {

    public static boolean isPrime(int num) {
        if (num <= 1) {
            return false;
        }
        if (num <= 3) {
            return true;
        }
        if (num % 2 == 0 || num % 3 == 0) {
            return false;
        }
        for (int i = 5; i * i <= num; i += 6) {
            if (num % i == 0 || num % (i + 2) == 0) {
                return false;
            }
        }
        return true;
    }

    public static List<Integer> findPrimes(int start, int end) {
        List<Integer> primes = new ArrayList<>();
        for (int i = start; i <= end; i++) {
            if (isPrime(i)) {
                primes.add(i);
            }
        }
        return primes;
    }

    public static void main(String[] args) {
        int range = 100;
        List<Integer> primes = findPrimes(2, range);
        
        System.out.println("2 到 " + range + " 之间的素数：");
        System.out.println(primes);
        System.out.println("共 " + primes.size() + " 个");
    }
}
