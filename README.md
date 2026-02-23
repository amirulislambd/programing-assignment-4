# Answers to Questions

### **1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
#
 **These methods are used to find elements from the DOM.**

**1 . getElementById**

- This method is used to find a specific single element by its unique ID.

* it is the fastest element for finding the element because IDs are unique in a document.
* it is updates automatically if the DOM change.

**2 . getElementByClassName**

-  This is method used to find multiple elements that share the same class name.
-  it returns HTMLcollection and which is not an jvaScript array but it is like an array.

**3 . querySelector and querySelectorAll**

- These are the most modern of all selectors. as thy use of CSSsectors ("#id", ".class","div","main")
- **querySelector** returns the only first element form the matches same elements.
-  **querySelectorAll** returns the all elements that match the selector as a NodeList
##
### **2. How do you create and insert a new element into the DOM?**
##
 **Creating and Displaying a new element in the UI involves three steps**

 **Step 1 . Crate the Element**

-  **Use The** document.createElement('div') method to create an element in memory.
-  **Example:** const div = document.createElement('div') <div> Create a < div> tag

 **Step 2 . Add Styles or Content**

-  **After** creating the element, need to add content or styling so it looks right in the UI.
-  **add text** div.innerText = 'assalamu alikum'
-  **add styles** div.classList.add('styles')

 Step 3 . **Insertion or (Show in UI)**

-  **To make the element visible** must attach it to a parent element already present in the DOM.The are Several Ways to do this.
-  1 . appendChild() used this method adds the new element **last** the child of parent.
-  2 . prepend() used this method adds the new element **first** of parent .
-  3 . before() or after() inserts hte element specifically before or after a target element
#
### **3. What is Event Bubbling? And how does it work?**
#
 **The Event Bubbling Mechanism of JavaScript** <p> when an event occurs on an element Then that event hits that parent and gradually reaches the upper level parents.

 **It works mainly in three stages.**

-  **Target Stage:** When a child element is clicked, the event trigger on that button.
- **Bubbling Up:** Then the event moves to the parent just above it
- **Top-level reaching:** As it climbs up. it reaches the document.

##

### **4 . What is Event Delegation in JavaScript? Why is it useful?**

 **What is Event Delegation?**

* **event delegation is the process of adding single event listener to a common parent element, rather than having separate event listener on many child elements**

 **Why is it useful?**

* **Memory Efficiency:** instead of multiple event listeners, one event listener works.
- **Cleaner Code:** The hassle of writing a lot of code is reduced and code management becomes easier.

#

### **5 . What is the difference between preventDefault() and stopPropagation() methods?**
#
 **The preventDefault() and stopPropagation() methods are both very important when handling events in JavaScript, but they have completely different functions.**

 **1 . preventDefault()**

-  This method is used to disable the default behavior of an element.

 **2 . stopPropagation()**

-  This method stops the bubbling or upward propagation of the event.
