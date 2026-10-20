
import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

// Custom hook: counts seconds while the stopwatch is running
function useStopwatch(isRunning: boolean) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    // Cleanup: stop the interval when paused or unmounted
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return seconds;
}

// Component 1: Practice Tracker
type PracticeTrackerProps = {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
};

function PracticeTracker({
  solved,
  onSolve,
  onReset,
}: PracticeTrackerProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Practice Tracker</Text>
      <Text style={styles.counter}>Solved: {solved}</Text>

      {solved >= 5 && (
        <Text style={styles.success}>Great job!</Text>
      )}

      <Pressable style={styles.solveButton} onPress={onSolve}>
        <Text style={styles.buttonText}>Solve +1</Text>
      </Pressable>

      <Pressable style={styles.resetButton} onPress={onReset}>
        <Text style={styles.darkButtonText}>Reset</Text>
      </Pressable>
    </View>
  );
}

// Component 2: Stopwatch
type StopwatchProps = {
  seconds: number;
  isRunning: boolean;
};

function Stopwatch({ seconds, isRunning }: StopwatchProps) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    `${String(minutes).padStart(2, '0')}:` +
    `${String(remainingSeconds).padStart(2, '0')}`;

  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Lab Stopwatch</Text>
      <Text style={styles.timer}>{formattedTime}</Text>

      <Text style={styles.status}>
        {isRunning ? 'Running…' : 'Paused'}
      </Text>
    </View>
  );
}

// Component 3: Parent screen owns the shared state
export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Lab Timer & Practice Tracker</Text>
        <Text style={styles.subtitle}>
          Track your practice and laboratory time.
        </Text>

        <PracticeTracker
          solved={solved}
          onSolve={handleSolve}
          onReset={handleReset}
        />

        <Stopwatch
          seconds={seconds}
          isRunning={isRunning}
        />

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Timer Controls</Text>

          <Pressable style={styles.startButton} onPress={handleStart}>
            <Text style={styles.buttonText}>Start</Text>
          </Pressable>

          <Pressable style={styles.stopButton} onPress={handleStop}>
            <Text style={styles.darkButtonText}>Stop</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  content: {
    padding: 20,
    paddingTop: 35,
    paddingBottom: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#17365D',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#526174',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#D9E2EF',
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#17365D',
    marginBottom: 14,
  },
  counter: {
    fontSize: 23,
    fontWeight: '600',
    color: '#26364A',
    marginBottom: 12,
  },
  success: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#15803D',
    marginBottom: 12,
  },
  timer: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#17365D',
    textAlign: 'center',
    marginVertical: 8,
  },
  status: {
    fontSize: 16,
    color: '#526174',
    textAlign: 'center',
    marginBottom: 8,
  },
  solveButton: {
    backgroundColor: '#1D4ED8',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: '#E2E8F0',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#15803D',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  stopButton: {
    backgroundColor: '#E2E8F0',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  darkButtonText: {
    color: '#26364A',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
