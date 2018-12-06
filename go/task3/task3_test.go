package task3

import (
	"testing"
)

func TestSolveTask3(t *testing.T) {
	tests := []struct {
		s int
	}{
		{s: 13},
	}

	for _, test := range tests {
		s := SolveTask3()
		if s != test.s {
			t.Errorf("Solution is incorrect, got: %d, expected: %d", s, test.s)
		}
	}
}
