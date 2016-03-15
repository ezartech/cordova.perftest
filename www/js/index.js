/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        document.getElementById('results').style.visibility = "hidden";
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       console.log('device ready');       
    },
    
    runTest: function() {
        if (!window.nop) {
            alert("NOP plugin not detected");
            return;
        }
        
        //hide results div
        document.getElementById('results').style.visibility = "hidden";
        
        var iterations = 1000;
        var results = [];

        for (i=0; i < iterations; i++) {            
            var t1 = performance.now();
            window.nop.doNop(
                //function(data) { alert('nop success'); } 
            );
            var t2= performance.now();
            results.push(t2-t1);
        }
        var firstIteration = results[0];
        results.sort();  // note that direction doesn't matter
        var median = results[Math.ceil(results.length / 2)];
          
        //generate and show results diev
        document.getElementById('results').style.visibility = "visible";
        document.getElementById('resultsIterations').innerHTML = iterations + "  nop iterations";
        document.getElementById('resultsFirstIteration').innerHTML = "1st iteration: " + firstIteration.toFixed(4) + " millis";
        document.getElementById('resultsMedian').innerHTML = "Median: " + median.toFixed(4) + " millis";
    }

};

app.initialize();



