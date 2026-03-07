import type { ReviewPost } from "../../types/types"
import { bookReview } from "../data/bookReviews"
import { useEffect, useState } from "react";

export const BookReviews: React.FC = ()=>{
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [filteredPosts, setFilteredPosts] = useState<ReviewPost[]>([]);

    useEffect(() => {
        let filtered = bookReview;
        
        if (searchTerm) {
            filtered = filtered.filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        if (selectedCategory) {
            filtered = filtered.filter(post => post.category === selectedCategory);
        }
        
        setFilteredPosts(filtered);
    }, [searchTerm, selectedCategory]);

    const categories = [...new Set(bookReview.map(post => post.category))];

    return(
        <section className="book-section">
            <div className="section-header">
                <h2 className="section-title">Book & Resources</h2>
                <p className="section-subtitle">
                Notes on books that shaped my thinking about mathematics, statistics, data, and life.
                </p>
            </div>

            <div className="book-controls">
                <div className="search-container">
                <input
                    type="text"
                    placeholder="Search books..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="search-icon">🔍</span>
                </div>
                <div className="category-filter">
                <button
                    className={`category-button ${selectedCategory === null ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(null)}
                >
                    All Categories
                </button>
                {categories.map((category) => (
                    <button
                    key={category}
                    className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                    >
                    {category}
                    </button>
                ))}
                </div>
            </div>

            <div className="book-posts">
                {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                    <article key={post.id} className="book-post" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="post-header">
                        <h3 className="post-title">{post.title}</h3>
                        <div className="post-meta">
                            <span className="post-authors">by {post.authors}</span>
                        </div>
                        <div className="post-meta">
                            <span className="post-authors">
                                {"free at "}
                                <a className="book-link" href={post.freeLink}>
                                    {post.freeLink}
                                </a>
                            </span>
                        </div>
                    </div>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-notes">
                        <strong>My Notes:</strong> {post.notes}
                    </div>
                    <div className="post-footer">
                        <div className="post-rating">
                            <span className="rating-stars">
                                {post.status=="Done"? 
                                    `${'★'.repeat(post.rating)}${'☆'.repeat(5 - post.rating)}`
                                    : post.status
                                }
                            </span>
                        </div>
                        <div className="post-tags">
                        {post.tags.map((tag) => (
                            <span key={tag} className="tag">
                            #{tag}
                            </span>
                        ))}
                        </div>
                    </div>
                    </article>
                ))
                ) : (
                <div className="no-results">
                    <p>No books match your search criteria.</p>
                </div>
                )}
            </div>
        </section>
    )
}