<template>
  <div>
    <h2>Directions for use</h2>
    
    <section>
      <h3>1. Dataset Download</h3>
      <ol>
        <li>
          <strong>Select the Dataset Name and Corresponding Programming Language</strong>, as shown below:
          <img src="./figuges/1.png" alt="Select Dataset" class="responsive-image">
        </li>
        <li>
          <strong>Click the Search Button</strong>. The preview of the dataset will appear on the right side, as shown below:
          <img src="./figuges/2.png" alt="Dataset Preview" class="responsive-image">
        </li>
        <li>
          <strong>Click the Download Button</strong>. The dataset will then be downloaded to your local machine.
        </li>
      </ol>
    </section>
    
    <section>
      <h3>2. Evaluation</h3>
      <ol>
        <li>
          <strong>Select the Dataset Name and Language</strong>.
        </li>
        <li>
          <strong>Input the Data to be Evaluated</strong>. You can enter data through the input box or import it from a local file. The input format is as follows, where <code>task_id</code> corresponds to the <code>task_id</code> in the downloaded dataset, and <code>result</code> is the result inferred by the model using the prompt corresponding to that <code>task_id</code>.
          <div class="code-container">
            <pre><code>
[
    {
        "task_id": XXX,
        "result": [
            XXX,
            ...
        ]
    }
    ...
]
            </code></pre>
          </div>
        </li>
        <li>
          <strong>Click the Evaluate Button</strong>. The platform will conduct the evaluation and save the results to your local machine.
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelpGuide'
}
</script>

<style scoped>
h2, h3 {
  color: #2c3e50;
}

ol {
  padding-left: 20px;
}

.responsive-image {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 10px 0;
}

.code-container {
  background-color: #f3f3f3;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}

code {
  background-color: transparent;
  padding: 0;
  border-radius: 0;
  white-space: pre-wrap; /* Ensures code wraps to the next line if it is too long */
  font-family: monospace; /* Ensures code is displayed in a monospace font */
}

pre {
  background-color: transparent;
  margin: 0;
  padding: 0;
}
</style>
