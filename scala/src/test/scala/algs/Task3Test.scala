package algs

import org.scalatest.FlatSpecLike

class Task3Test extends FlatSpecLike {

  private val task3 = new Task3()

  it should "correctly return 13 when calling solve()" in {
    assert(task3.solve() == 13)
  }

}