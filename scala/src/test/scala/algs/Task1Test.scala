package algs

import org.scalatest.FlatSpecLike

class Task1Test extends FlatSpecLike {

  private val task1 = new Task1()

  it should "Should correctly return 13 when calling solve()" in {
    assert(task1.solve() == 13)
  }

}