'use client'
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { FiTrash2 } from 'react-icons/fi';

interface Subscription {
  _id: string;
  email: string;
  isActive: boolean;
  createdAt: string;
}

export default function SubscriptionPage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const fetchSubscriptions = async () => {
    try {
      const response = await fetch('/api/subscriptions');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setSubscriptions(data);
    } catch (error) {
      console.error('Subscription error:', error);
      toast.error('Failed to fetch subscriptions');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'active' | 'inactive') => {
    try {
      const response = await fetch(`/api/subscriptions/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error('Failed to update status');
      
      toast.success('Status updated successfully');
      fetchSubscriptions();
    } catch (error) {
      console.error('Subscription error:', error);
      toast.error('Failed to update status');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this subscription?')) return;

    try {
      const response = await fetch(`/api/subscriptions/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete');
      
      toast.success('Subscription deleted successfully');
      fetchSubscriptions();
    } catch (error) {
      console.error('Subscription error:', error);
      toast.error('Failed to delete subscription');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Subscription Messages</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {subscriptions.map((subscription) => (
          <div
            key={subscription._id}
            className="border-b border-gray-200 p-6 hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{subscription.email}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(subscription.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <select
                  value={subscription.isActive ? 'active' : 'inactive'}
                  onChange={(e) => handleStatusChange(subscription._id, e.target.value as 'active' | 'inactive')}
                  className={`rounded px-3 py-1 text-sm font-medium ${
                    subscription.isActive
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>

                <button
                  onClick={() => handleDelete(subscription._id)}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {subscriptions.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No subscriptions found
          </div>
        )}
      </div>
    </div>
  );
} 