import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Upload, Save, X, Calendar, MapPin, Clock, Globe, DollarSign, Users, Trophy, Building2, Eye, Star, MessageSquare, BarChart3, TrendingUp } from 'lucide-react';

interface Client {
  id: string;
  name: string;
  image: string;
}

interface Achievement {
  id: string;
  title: string;
  location: string;
  date: string;
  category: string;
  description: string;
  images: string[];
}

interface Workshop {
  id: string;
  title: string;
  poster: string;
  registerUrl: string;
  price: string;
  time: string;
  mode: string;
  date: string;
  description: string;
}

interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
}

interface StatNumber {
  id: string;
  number: number;
  label: string;
  icon: string;
  color: string;
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'clients' | 'achievements' | 'workshops' | 'testimonials' | 'numbers'>('clients');
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Sample data - in real app, this would come from API
  const [clients, setClients] = useState<Client[]>([
    { id: '1', name: 'Client 1', image: '/assets/clients/cli1.png' },
    { id: '2', name: 'Client 2', image: '/assets/clients/cli2.jpg' },
  ]);

  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'ROS2 Workshop at Tech University',
      location: 'Chennai Institute of Technology',
      date: '2024-11-25',
      category: 'ROS',
      description: 'Comprehensive 3-day workshop on ROS2 fundamentals covering nodes, topics, services, and practical implementation.',
      images: ['/assets/workshops/workshop1/w1.jpg', '/assets/workshops/workshop1/w2.jpg']
    }
  ]);

  const [workshops, setWorkshops] = useState<Workshop[]>([
    {
      id: '1',
      title: 'ROS 2: Basics, Roadmap to Pro',
      poster: '/assets/workshop.png',
      registerUrl: 'https://unstop.com/example',
      price: '₹150',
      time: '9:30 AM - 12:00 PM',
      mode: 'Online',
      date: '2025-06-29',
      description: 'Complete roadmap from ROS2 basics to professional level implementation.'
    }
  ]);

  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: '1',
      name: 'Dr. Rajesh Kumar',
      designation: 'Professor & Head',
      company: 'Department of Robotics, IIT Chennai',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      testimonial: 'Karthikesh Robotics delivered an exceptional ROS2 workshop for our students. Their practical approach and deep technical knowledge made complex concepts accessible.',
      rating: 5
    }
  ]);

  const [statNumbers, setStatNumbers] = useState<StatNumber[]>([
    {
      id: '1',
      number: 7,
      label: 'Robots Delivered',
      icon: 'robot',
      color: 'blue'
    },
    {
      id: '2',
      number: 22,
      label: 'Workshops',
      icon: 'workshop',
      color: 'green'
    },
    {
      id: '3',
      number: 256,
      label: 'Interns',
      icon: 'users',
      color: 'purple'
    },
    {
      id: '4',
      number: 1091,
      label: 'Students Mentored',
      icon: 'graduation',
      color: 'orange'
    }
  ]);

  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field: string, files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files);
      if (field === 'images') {
        // For achievements - multiple images
        const imageUrls = fileArray.map(file => URL.createObjectURL(file));
        setFormData(prev => ({ ...prev, [field]: imageUrls }));
      } else {
        // For single image uploads
        const imageUrl = URL.createObjectURL(fileArray[0]);
        setFormData(prev => ({ ...prev, [field]: imageUrl }));
      }
    }
  };

  const openModal = (type: 'add' | 'edit', item?: any) => {
    if (type === 'edit' && item) {
      setEditingItem(item);
      setFormData(item);
    } else {
      setEditingItem(null);
      setFormData({});
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingItem(null);
    setFormData({});
  };

  const handleSave = () => {
    const newId = Date.now().toString();
    
    if (activeTab === 'clients') {
      if (editingItem) {
        setClients(prev => prev.map(c => c.id === editingItem.id ? { ...formData, id: editingItem.id } : c));
      } else {
        setClients(prev => [...prev, { ...formData, id: newId }]);
      }
    } else if (activeTab === 'achievements') {
      if (editingItem) {
        setAchievements(prev => prev.map(a => a.id === editingItem.id ? { ...formData, id: editingItem.id } : a));
      } else {
        setAchievements(prev => [...prev, { ...formData, id: newId }]);
      }
    } else if (activeTab === 'workshops') {
      if (editingItem) {
        setWorkshops(prev => prev.map(w => w.id === editingItem.id ? { ...formData, id: editingItem.id } : w));
      } else {
        setWorkshops(prev => [...prev, { ...formData, id: newId }]);
      }
    } else if (activeTab === 'testimonials') {
      if (editingItem) {
        setTestimonials(prev => prev.map(t => t.id === editingItem.id ? { ...formData, id: editingItem.id } : t));
      } else {
        setTestimonials(prev => [...prev, { ...formData, id: newId }]);
      }
    } else if (activeTab === 'numbers') {
      if (editingItem) {
        setStatNumbers(prev => prev.map(s => s.id === editingItem.id ? { ...formData, id: editingItem.id } : s));
      } else {
        setStatNumbers(prev => [...prev, { ...formData, id: newId }]);
      }
    }
    
    closeModal();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      if (activeTab === 'clients') {
        setClients(prev => prev.filter(c => c.id !== id));
      } else if (activeTab === 'achievements') {
        setAchievements(prev => prev.filter(a => a.id !== id));
      } else if (activeTab === 'workshops') {
        setWorkshops(prev => prev.filter(w => w.id !== id));
      } else if (activeTab === 'testimonials') {
        setTestimonials(prev => prev.filter(t => t.id !== id));
      } else if (activeTab === 'numbers') {
        setStatNumbers(prev => prev.filter(s => s.id !== id));
      }
    }
  };

  const renderClientForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-2">Client Name</label>
        <input
          type="text"
          value={formData.name || ''}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          placeholder="Enter client name"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Client Logo (PNG)</label>
        <input
          type="file"
          accept=".png"
          onChange={(e) => handleFileUpload('image', e.target.files)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
        />
        {formData.image && (
          <img src={formData.image} alt="Preview" className="mt-2 h-20 object-contain" />
        )}
      </div>
    </div>
  );

  const renderAchievementForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-2">Workshop Title</label>
        <input
          type="text"
          value={formData.title || ''}
          onChange={(e) => handleInputChange('title', e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          placeholder="Enter workshop title"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Location</label>
        <input
          type="text"
          value={formData.location || ''}
          onChange={(e) => handleInputChange('location', e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          placeholder="Enter location"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Date</label>
          <input
            type="date"
            value={formData.date || ''}
            onChange={(e) => handleInputChange('date', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Category</label>
          <select
            value={formData.category || ''}
            onChange={(e) => handleInputChange('category', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          >
            <option value="">Select category</option>
            <option value="ROS">ROS</option>
            <option value="Robotics">Robotics</option>
            <option value="AIML">AIML</option>
            <option value="GEN AI">GEN AI</option>
            <option value="RoboDK">RoboDK</option>
            <option value="AR VR">AR VR</option>
            <option value="Project Mentoring">Project Mentoring</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Description</label>
        <textarea
          value={formData.description || ''}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          placeholder="Enter full description about the workshop"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Workshop Images (4 photos)</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleFileUpload('images', e.target.files)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
        />
        {formData.images && formData.images.length > 0 && (
          <div className="mt-2 grid grid-cols-4 gap-2">
            {formData.images.map((img: string, idx: number) => (
              <img key={idx} src={img} alt={`Preview ${idx + 1}`} className="h-20 object-cover rounded" />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderWorkshopForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-2">Workshop Title</label>
        <input
          type="text"
          value={formData.title || ''}
          onChange={(e) => handleInputChange('title', e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          placeholder="Enter workshop title"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Poster Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileUpload('poster', e.target.files)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
        />
        {formData.poster && (
          <img src={formData.poster} alt="Poster Preview" className="mt-2 h-32 object-contain" />
        )}
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Registration URL</label>
        <input
          type="url"
          value={formData.registerUrl || ''}
          onChange={(e) => handleInputChange('registerUrl', e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          placeholder="https://example.com/register"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Price</label>
          <input
            type="text"
            value={formData.price || ''}
            onChange={(e) => handleInputChange('price', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
            placeholder="₹150"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Date</label>
          <input
            type="date"
            value={formData.date || ''}
            onChange={(e) => handleInputChange('date', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Time</label>
          <input
            type="text"
            value={formData.time || ''}
            onChange={(e) => handleInputChange('time', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
            placeholder="9:30 AM - 12:00 PM"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Mode</label>
          <select
            value={formData.mode || ''}
            onChange={(e) => handleInputChange('mode', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          >
            <option value="">Select mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Description</label>
        <textarea
          value={formData.description || ''}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          placeholder="Enter workshop description"
        />
      </div>
    </div>
  );

  const renderTestimonialForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          value={formData.name || ''}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          placeholder="Enter person's name"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Designation</label>
          <input
            type="text"
            value={formData.designation || ''}
            onChange={(e) => handleInputChange('designation', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
            placeholder="Job title/position"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Company/Organization</label>
          <input
            type="text"
            value={formData.company || ''}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
            placeholder="Company or organization name"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Profile Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileUpload('image', e.target.files)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
        />
        {formData.image && (
          <img src={formData.image} alt="Profile Preview" className="mt-2 h-20 w-20 object-cover rounded-full" />
        )}
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Testimonial</label>
        <textarea
          value={formData.testimonial || ''}
          onChange={(e) => handleInputChange('testimonial', e.target.value)}
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          placeholder="Enter the testimonial text"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Rating (1-5 stars)</label>
        <select
          value={formData.rating || 5}
          onChange={(e) => handleInputChange('rating', parseInt(e.target.value))}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
        >
          <option value={5}>5 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={2}>2 Stars</option>
          <option value={1}>1 Star</option>
        </select>
      </div>
    </div>
  );

  const renderNumbersForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-2">Number/Count</label>
        <input
          type="number"
          value={formData.number || ''}
          onChange={(e) => handleInputChange('number', parseInt(e.target.value))}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          placeholder="Enter the number (e.g., 7, 22, 256)"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Label</label>
        <input
          type="text"
          value={formData.label || ''}
          onChange={(e) => handleInputChange('label', e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          placeholder="Enter label (e.g., Robots Delivered, Workshops, Students Mentored)"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Icon Type</label>
          <select
            value={formData.icon || ''}
            onChange={(e) => handleInputChange('icon', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          >
            <option value="">Select icon</option>
            <option value="robot">Robot</option>
            <option value="workshop">Workshop</option>
            <option value="users">Users/People</option>
            <option value="graduation">Graduation/Education</option>
            <option value="trophy">Trophy/Achievement</option>
            <option value="building">Building/Company</option>
            <option value="chart">Chart/Analytics</option>
            <option value="star">Star/Rating</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Color Theme</label>
          <select
            value={formData.color || ''}
            onChange={(e) => handleInputChange('color', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
          >
            <option value="">Select color</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="indigo">Indigo</option>
            <option value="pink">Pink</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'clients':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client) => (
              <motion.div
                key={client.id}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">{client.name}</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal('edit', client)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(client.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="h-32 flex items-center justify-center bg-gray-50 rounded-lg">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'achievements':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {achievement.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {achievement.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal('edit', achievement)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(achievement.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{achievement.description}</p>
                {achievement.images && achievement.images.length > 0 && (
                  <div className="grid grid-cols-4 gap-2">
                    {achievement.images.slice(0, 4).map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Workshop ${idx + 1}`}
                        className="h-16 object-cover rounded"
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        );

      case 'workshops':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {workshops.map((workshop) => (
              <motion.div
                key={workshop.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
                whileHover={{ scale: 1.01 }}
              >
                <div className="aspect-video">
                  <img
                    src={workshop.poster}
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{workshop.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {workshop.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {workshop.price}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={workshop.registerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-700"
                      >
                        <Eye className="h-4 w-4" />
                      </a>
                      <button
                        onClick={() => openModal('edit', workshop)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(workshop.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {workshop.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      {workshop.mode}
                    </div>
                  </div>
                  <p className="text-gray-600 line-clamp-2">{workshop.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'testimonials':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-green-500"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-green-600 font-medium">{testimonial.designation}</p>
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal('edit', testimonial)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
              </motion.div>
            ))}
          </div>
        );

      case 'numbers':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statNumbers.map((stat) => (
              <motion.div
                key={stat.id}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-${stat.color}-100 p-3 rounded-lg`}>
                    {stat.icon === 'robot' && <BarChart3 className={`h-8 w-8 text-${stat.color}-500`} />}
                    {stat.icon === 'workshop' && <Users className={`h-8 w-8 text-${stat.color}-500`} />}
                    {stat.icon === 'users' && <Users className={`h-8 w-8 text-${stat.color}-500`} />}
                    {stat.icon === 'graduation' && <Trophy className={`h-8 w-8 text-${stat.color}-500`} />}
                    {stat.icon === 'trophy' && <Trophy className={`h-8 w-8 text-${stat.color}-500`} />}
                    {stat.icon === 'building' && <Building2 className={`h-8 w-8 text-${stat.color}-500`} />}
                    {stat.icon === 'chart' && <TrendingUp className={`h-8 w-8 text-${stat.color}-500`} />}
                    {stat.icon === 'star' && <Star className={`h-8 w-8 text-${stat.color}-500`} />}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal('edit', stat)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(stat.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{stat.number}+</h3>
                  <p className="text-gray-600 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Admin <span className="text-green-500">Dashboard</span>
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Manage your website content efficiently
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Building2 className="h-8 w-8 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{clients.length}</h3>
                <p className="text-gray-600">Total Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Trophy className="h-8 w-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{achievements.length}</h3>
                <p className="text-gray-600">Achievements</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="h-8 w-8 text-purple-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{workshops.length}</h3>
                <p className="text-gray-600">Workshops</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <MessageSquare className="h-8 w-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{testimonials.length}</h3>
                <p className="text-gray-600">Testimonials</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <BarChart3 className="h-8 w-8 text-indigo-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{statNumbers.length}</h3>
                <p className="text-gray-600">Stat Numbers</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            {(['clients', 'achievements', 'workshops', 'testimonials', 'numbers'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 capitalize ${
                  activeTab === tab
                    ? 'bg-green-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-green-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Add Button */}
        <div className="flex justify-end mb-6">
          <motion.button
            onClick={() => openModal('add')}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="h-5 w-5" />
            Add {activeTab === 'numbers' ? 'Stat Number' : activeTab.slice(0, -1)}
          </motion.button>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">
                    {editingItem ? 'Edit' : 'Add'} {activeTab === 'numbers' ? 'Stat Number' : activeTab.slice(0, -1)}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {activeTab === 'clients' && renderClientForm()}
                {activeTab === 'achievements' && renderAchievementForm()}
                {activeTab === 'workshops' && renderWorkshopForm()}
                {activeTab === 'testimonials' && renderTestimonialForm()}
                {activeTab === 'numbers' && renderNumbersForm()}

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Save className="h-5 w-5" />
                    Save
                  </button>
                  <button
                    onClick={closeModal}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;