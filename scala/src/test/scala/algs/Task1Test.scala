package algs

import org.scalatest.FlatSpecLike

class Task1Test extends FlatSpecLike {

  private val task1 = new Task1()

  it should "correctly return 7 when calling solve()" in {
    assert(task1.solve() == 7)
  }

}