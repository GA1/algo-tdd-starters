package algs

import org.scalatest.FlatSpecLike

class Task2Test extends FlatSpecLike {

  private val task2 = new Task2()

  it should "correctly return 11 when calling solve()" in {
    assert(task2.solve() == 11)
  }

}