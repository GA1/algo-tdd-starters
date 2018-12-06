package task1

import (
	"testing"
)

func TestSolveTask1(t *testing.T) {
	tests := []struct {
		s int
	}{
		{s: 7},
	}

	for _, test := range tests {
		s := SolveTask1()
		if s != test.s {
			t.Errorf("Solution is incorrect, got: %d, expected: %d", s, test.s)
		}
	}
}
