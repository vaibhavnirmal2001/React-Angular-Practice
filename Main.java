import java.util.ArrayList;

import javax.swing.SingleSelectionModel;

class Main{
    
        public static int singleNonDuplicate(int[] nums) {
            if(nums.length==0) return nums[0];
            ArrayList<Integer> al = new ArrayList<>();
            for(Integer x: nums){
                if(al.contains(x)){
                    al.remove(al.indexOf(x));
                }else{
                    al.add(x);
                }
            }
            return al.get(0);
            
        }
    
    public static void main(String[] args) {
        System.out.println(singleNonDuplicate(new int[]{1,1,2,3,3,4,4,8,8}));
    }
}
