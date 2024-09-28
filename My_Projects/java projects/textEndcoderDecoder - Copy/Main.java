package textEndcoderDecoder;

public class Main {
    public static void main(String a[]) throws Exception {
        // minHeap<Integer> hp = new minHeap<>();
        // Integer[] arr = { 1, 2, 3, 4, 5, 4, 6, 8, 6, 43, 5, 74, 34, 45, 3456, 363,
        // 2445 };
        // hp.create(arr);

        String str = "Hi I am Ranajit Das";
        huffmanCoding huff = new huffmanCoding(str);
        String coded = huff.encode(str);
        System.out.println(coded);
        String decoded = huff.decode(coded);
        System.out.println(decoded);
    }
}
