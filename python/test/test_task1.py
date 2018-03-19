import unittest
from src.task1 import solve


class TestTask1(unittest.TestCase):

    def test_no_ids(self):
        self.assertEqual(13, solve())
