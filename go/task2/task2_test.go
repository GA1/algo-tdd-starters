package task2

import (
	"testing"
)

func TestSolveTask2(t *testing.T) {
	tests := []struct {
		s int
	}{
		{s: 11},
	}

	for _, test := range tests {
		s := SolveTask2()
		if s != test.s {
			t.Errorf("Solution is incorrect, got: %d, expected: %d", s, test.s)
		}
	}
}
