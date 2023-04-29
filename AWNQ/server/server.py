from flask import Flask
from flask_cors import cross_origin
from qiskit import *

app = Flask(__name__)


@cross_origin()
@app.route("/airQuality")
def airQuality():
    qc = QuantumCircuit(2, 2)
    qc.h(0)
    qc.cx(0, 1)
    qc.measure([0, 1], [0, 1])
    backend = Aer.get_backend('qasm_simulator')
    job = execute(qc, backend, shots=1024)
    result = job.result()
    counts = result.get_counts()
    return str(counts)


if __name__ == "__main__":
    app.run(debug=True)
