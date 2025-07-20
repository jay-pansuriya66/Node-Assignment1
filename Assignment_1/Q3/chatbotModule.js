const knowledgeBase = {
    "greeting": [
        "Hello! How can I help you today?",
        "Hi there! Welcome to our store support. What can I assist you with?",
        "Greetings! How may I be of service?"
    ],
    "order_status_keywords": ["order", "status", "track", "delivery", "shipping"],
    "order_status_responses": [
        "To check your order status, please provide your order number.",
        "Could you please share your order ID so I can track it for you?",
        "I can help with that! What's your order number?"
    ],
    "product_info_keywords": ["product", "information", "details", "specifications", "about"],
    "product_info_responses": [
        "What product are you interested in? Please provide the product name or ID.",
        "Tell me which product you'd like to know more about.",
        "I can give you product details. Which product are you referring to?"
    ],
    "return_policy_keywords": ["return", "refund", "policy", "exchange", "guarantee"],
    "return_policy_responses": [
        "Our return policy allows returns within 30 days of purchase for a full refund. Items must be in their original condition. For more details, please visit our 'Returns & Refunds' page on the website.",
        "You can return items within 30 days. Please ensure the product is unused and in its original packaging.",
        "We offer a 30-day return window. Check our website for the complete return policy."
    ],
    "contact_support_keywords": ["contact", "support", "help", "agent", "human"],
    "contact_support_responses": [
        "You can contact our live support team by calling 1-800-123-4567 or by emailing support@ecommerce.com.",
        "For direct assistance, please call our customer service hotline or send us an email.",
        "If you need to speak with a human, our support team is available via phone and email."
    ],
    "goodbye": [
        "Goodbye! Have a great day!",
        "Thank you for reaching out. See you next time!",
        "Farewell! Don't hesitate to contact us again."
    ],
    "default": [
        "I'm sorry, I don't understand your request. Could you please rephrase it?",
        "I'm still learning. Can you provide more context or ask a different question?",
        "My apologies, I'm not sure how to respond to that. Is there anything else I can help with?"
    ]
};

function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();

    if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("hey")) {
        return getRandomResponse(knowledgeBase.greeting);
    } else if (knowledgeBase.order_status_keywords.some(keyword => userInput.includes(keyword))) {
        return getRandomResponse(knowledgeBase.order_status_responses);
    } else if (knowledgeBase.product_info_keywords.some(keyword => userInput.includes(keyword))) {
        return getRandomResponse(knowledgeBase.product_info_responses);
    } else if (knowledgeBase.return_policy_keywords.some(keyword => userInput.includes(keyword))) {
        return getRandomResponse(knowledgeBase.return_policy_responses);
    } else if (knowledgeBase.contact_support_keywords.some(keyword => userInput.includes(keyword))) {
        return getRandomResponse(knowledgeBase.contact_support_responses);
    } else if (userInput.includes("bye") || userInput.includes("goodbye") || userInput.includes("exit")) {
        return getRandomResponse(knowledgeBase.goodbye);
    } else {
        return getRandomResponse(knowledgeBase.default);
    }
}

function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

module.exports = {
    getBotResponse
};