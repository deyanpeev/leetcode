import org.w3c.dom.NodeList;

class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

public class Main {
    public static void main(String[] args) {

    }

    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode result = new ListNode();
        ListNode nextToAttach = result;
        while(list1 != null || list2 != null) {
            if(list1 == null) {
                nextToAttach.next = list2;
                list2 = list2.next;
            } else if(list2 == null) {
                nextToAttach.next = list1;
                list1 = list1.next;
            } else {
                if(list1.val < list2.val) {
                    nextToAttach.next = list1;
                    list1 = list1.next;
                } else {
                    nextToAttach.next = list2;
                    list2 = list2.next;
                }
            }
            nextToAttach = nextToAttach.next;
        }
        result = result.next;
        return result;
    }
}