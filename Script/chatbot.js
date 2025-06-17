// chatbot.js
document.addEventListener('DOMContentLoaded', function() {
    // Create modal container
    const modal = document.createElement('div');
    modal.id = 'hp-chatbot-modal';
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.bottom = '20px';
    modal.style.right = '20px';
    modal.style.width = '350px';
    modal.style.maxHeight = '500px';
    modal.style.backgroundColor = 'white';
    modal.style.borderRadius = '8px';
    modal.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    modal.style.zIndex = '1000';
    modal.style.fontFamily = 'Arial, sans-serif';
    modal.style.overflow = 'hidden';
    modal.style.flexDirection = 'column';
    
    // Create modal header
    const header = document.createElement('div');
    header.style.backgroundColor = '#0096D6';
    header.style.color = 'white';
    header.style.padding = '15px';
    header.style.fontWeight = 'bold';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.innerHTML = 'HP India Support';
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.background = 'none';
    closeBtn.style.border = 'none';
    closeBtn.style.color = 'white';
    closeBtn.style.fontSize = '20px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      chatButton.style.display = 'block';
    });
    
    header.appendChild(closeBtn);
    modal.appendChild(header);
    
    // Create chat container
    const chatContainer = document.createElement('div');
    chatContainer.id = 'hp-chat-container';
    chatContainer.style.padding = '15px';
    chatContainer.style.overflowY = 'auto';
    chatContainer.style.flexGrow = '1';
    chatContainer.style.maxHeight = '400px';
    modal.appendChild(chatContainer);
    
    // Create input area
    const inputArea = document.createElement('div');
    inputArea.style.padding = '15px';
    inputArea.style.borderTop = '1px solid #eee';
    inputArea.style.display = 'flex';
    inputArea.style.flexDirection = 'column';
    inputArea.style.gap = '10px';
    
    // Create options container
    const optionsContainer = document.createElement('div');
    optionsContainer.style.display = 'flex';
    optionsContainer.style.flexWrap = 'wrap';
    optionsContainer.style.gap = '8px';
    
    // Add options buttons
    const options = ['Laptop', 'Desktop', 'Printer', 'Monitor'];
    options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.style.padding = '8px 12px';
      btn.style.backgroundColor = '#f5f5f5';
      btn.style.border = '1px solid #ddd';
      btn.style.borderRadius = '4px';
      btn.style.cursor = 'pointer';
      btn.style.transition = 'background-color 0.3s';
      btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = '#e9e9e9';
      });
      btn.addEventListener('mouseout', () => {
        btn.style.backgroundColor = '#f5f5f5';
      });
      btn.addEventListener('click', () => {
        addUserMessage(option);
        setTimeout(() => {
          addBotMessageWithLink(option);
        }, 500);
      });
      optionsContainer.appendChild(btn);
    });
    
    inputArea.appendChild(optionsContainer);
    modal.appendChild(inputArea);
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Create chat button (green circle)
    const chatButton = document.createElement('div');
    chatButton.id = 'hp-chat-button';
    chatButton.style.position = 'fixed';
    chatButton.style.bottom = '20px';
    chatButton.style.right = '20px';
    chatButton.style.backgroundColor = '#4CAF50';
    chatButton.style.color = 'white';
    chatButton.style.border = 'none';
    chatButton.style.borderRadius = '50%';
    chatButton.style.width = '50px';
    chatButton.style.height = '50px';
    chatButton.style.display = 'flex';
    chatButton.style.alignItems = 'center';
    chatButton.style.justifyContent = 'center';
    chatButton.style.cursor = 'pointer';
    chatButton.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    chatButton.style.zIndex = '999';
    
    // Add chat icon inside the circle
    const chatIcon = document.createElement('div');
    chatIcon.innerHTML = '💬';
    chatIcon.style.fontSize = '20px';
    chatButton.appendChild(chatIcon);
    
    chatButton.addEventListener('click', function() {
      modal.style.display = 'flex';
      chatButton.style.display = 'none';
      // Add welcome message if chat is empty
      if (chatContainer.children.length === 0) {
        addBotMessage('Welcome to HP India. How can I help you today?');
      }
    });
    
    document.body.appendChild(chatButton);
    
    // Function to add bot message with clickable link
    function addBotMessageWithLink(option) {
      const messageDiv = document.createElement('div');
      messageDiv.style.marginBottom = '15px';
      messageDiv.style.display = 'flex';
      
      const avatar = document.createElement('div');
      avatar.style.width = '30px';
      avatar.style.height = '30px';
      avatar.style.backgroundColor = '#0096D6';
      avatar.style.borderRadius = '50%';
      avatar.style.marginRight = '10px';
      avatar.style.flexShrink = '0';
      avatar.style.display = 'flex';
      avatar.style.alignItems = 'center';
      avatar.style.justifyContent = 'center';
      avatar.style.color = 'white';
      avatar.style.fontWeight = 'bold';
      avatar.textContent = 'HP';
      
      const content = document.createElement('div');
      content.style.backgroundColor = '#f5f5f5';
      content.style.padding = '10px 15px';
      content.style.borderRadius = '0 10px 10px 10px';
      content.style.maxWidth = '80%';
      
      // Create the message with clickable link
      const messageText = document.createElement('span');
      messageText.textContent = 'Here you can view all the ';
      
      const productLink = document.createElement('a');
      productLink.textContent = option;
      productLink.href = `../${option.toLowerCase()}.html`; // Go up one level to main directory
      productLink.style.color = '#0096D6';
      productLink.style.textDecoration = 'underline';
      productLink.style.cursor = 'pointer';
      productLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        window.location.href = `../${option.toLowerCase()}.html`; // Navigate to product page in main directory
      });
      
      content.appendChild(messageText);
      content.appendChild(productLink);
      
      messageDiv.appendChild(avatar);
      messageDiv.appendChild(content);
      chatContainer.appendChild(messageDiv);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
    // Function to add regular bot message
    function addBotMessage(text) {
      const messageDiv = document.createElement('div');
      messageDiv.style.marginBottom = '15px';
      messageDiv.style.display = 'flex';
      
      const avatar = document.createElement('div');
      avatar.style.width = '30px';
      avatar.style.height = '30px';
      avatar.style.backgroundColor = '#0096D6';
      avatar.style.borderRadius = '50%';
      avatar.style.marginRight = '10px';
      avatar.style.flexShrink = '0';
      avatar.style.display = 'flex';
      avatar.style.alignItems = 'center';
      avatar.style.justifyContent = 'center';
      avatar.style.color = 'white';
      avatar.style.fontWeight = 'bold';
      avatar.textContent = 'HP';
      
      const content = document.createElement('div');
      content.style.backgroundColor = '#f5f5f5';
      content.style.padding = '10px 15px';
      content.style.borderRadius = '0 10px 10px 10px';
      content.style.maxWidth = '80%';
      content.textContent = text;
      
      messageDiv.appendChild(avatar);
      messageDiv.appendChild(content);
      chatContainer.appendChild(messageDiv);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
    // Function to add user message
    function addUserMessage(text) {
      const messageDiv = document.createElement('div');
      messageDiv.style.marginBottom = '15px';
      messageDiv.style.display = 'flex';
      messageDiv.style.justifyContent = 'flex-end';
      
      const content = document.createElement('div');
      content.style.backgroundColor = '#0096D6';
      content.style.color = 'white';
      content.style.padding = '10px 15px';
      content.style.borderRadius = '10px 0 10px 10px';
      content.style.maxWidth = '80%';
      content.textContent = text;
      
      messageDiv.appendChild(content);
      chatContainer.appendChild(messageDiv);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        chatButton.style.display = 'flex';
      }
    });
  });