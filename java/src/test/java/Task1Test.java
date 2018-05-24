import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class Task1Test {

    private Task1 task1= new Task1();

    @Test
    public void test1element() {
        assertEquals(7, task1.solve());
    }

}
