import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class Task3Test {

    private Task3 task3 = new Task3();

    @Test
    public void test3element() {
        assertEquals(13, task3.solve());
    }

}
