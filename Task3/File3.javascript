// Course details data
const courses = {
    'course1': {
        title: 'Introduction to HTML',
        description: 'This course covers the basics of HTML including elements, attributes, and creating structured web pages.'
    },
    'course2': {
        title: 'Introduction to CSS',
        description: 'Learn how to style web pages using CSS. Topics include selectors, properties, and responsive design.'
    },
    'course3': {
        title: 'Introduction to JavaScript',
        description: 'This course introduces you to JavaScript programming. You will learn about variables, functions, and control flow.'
    }
};

// Show course details
function showCourseDetails(courseId) {
    const course = courses[courseId];
    const detailsContent = document.getElementById('details-content');
    detailsContent.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
    `;
    document.getElementById('course-details').style.display = 'block';
}

// Start course (simulated)
function startCourse() {
    alert('Course started! Enjoy learning.');
}
