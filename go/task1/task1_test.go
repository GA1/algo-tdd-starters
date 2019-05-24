package task1

import (
	"testing"
)

func TestSolveTask1(t *testing.T) {
	tests := []struct {
		input int
		expected int
	}{
		{
			input: 7,
			expected: 14,
		},
	}

	for _, test := range tests {
		result := solve(test.input)
		if result != test.expected {
			t.Errorf("Solution is incorrect, got: %d, expected: %d", result, test.expected)
		}
	}
}
