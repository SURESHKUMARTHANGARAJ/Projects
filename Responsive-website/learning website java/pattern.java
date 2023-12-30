import java.util.*;
public class pattern {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int sum=0;
        int y=1;
        while(n>0){
            int rem=n%10;
            sum=sum+(rem*y);
            y=y*2;
            n=n/10;
        }
    System.out.print(sum);
    }
}