"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useState } from 'react';
import { FaPlus, FaEye, FaTrash, FaIdCard, FaPassport } from 'react-icons/fa'
import Image from 'next/image';

interface Document {
    id: string
    type: string
    number: string
    issueDate: string
    expiryDate: string
    country: string
    frontSide: File | null
    backSide: File | null
  }

const UserDocument = () => {
    const [documents, setDocuments] = useState<Document[]>([
        { id: '1', type: 'National ID', number: 'ID123456', issueDate: '2020-01-01', expiryDate: '2030-01-01', country: 'United States', frontSide: null, backSide: null },
        { id: '2', type: 'Passport', number: 'P987654', issueDate: '2019-06-15', expiryDate: '2029-06-15', country: 'United Kingdom', frontSide: null, backSide: null },
      ])
    
      const [newDocument, setNewDocument] = useState<Partial<Document>>({
        type: 'national-id',
        number: '',
        issueDate: '',
        expiryDate: '',
        country: '',
        frontSide: null,
        backSide: null,
      })
    
      const [previewDocument, setPreviewDocument] = useState<Document | null>(null)
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setNewDocument(prev => ({ ...prev, [name]: value }))
      }
    
      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target
        if (files && files[0]) {
          setNewDocument(prev => ({ ...prev, [name]: files[0] }))
        }
      }
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const id = Math.random().toString(36).substr(2, 9)
        setDocuments(prev => [...prev, { ...newDocument, id } as Document])
        setNewDocument({
          type: 'national-id',
          number: '',
          issueDate: '',
          expiryDate: '',
          country: '',
          frontSide: null,
          backSide: null,
        })
      }
    
      const deleteDocument = (id: string) => {
        setDocuments(prev => prev.filter(doc => doc.id !== id))
      }
    
      const previewDocumentHandler = (doc: Document) => {
        setPreviewDocument(doc)
      }
    return (
        <Fragment>
            <Seo title={"Invoice List"} />
            <Pageheader currentpage="Documents" activepage="Settings" mainpage="Documents" />
            <div className="min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                    <h2 className="text-xl font-semibold mb-4">Previous Documents</h2>
                    {documents.length === 0 ? (
                        <p className="text-gray-500">No documents added yet.</p>
                    ) : (
                        <ul className="space-y-4">
                        {documents.map((doc) => (
                            <li key={doc.id} className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center mb-2 sm:mb-0">
                                {doc.type === 'National ID' ? (
                                <FaIdCard className="text-blue-500 mr-3 text-xl" />
                                ) : (
                                <FaPassport className="text-green-500 mr-3 text-xl" />
                                )}
                                <div>
                                <h6 className="font-semibold">{doc.type}</h6>
                                <p className="text-sm text-gray-600">Number: {doc.number}</p>
                                <p className="text-sm text-gray-600">Expiry: {doc.expiryDate}</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                onClick={() => previewDocumentHandler(doc)}
                                className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition-colors"
                                aria-label={`View ${doc.type}`}
                                >
                                <FaEye className="w-5 h-5" />
                                </button>
                                <button
                                onClick={() => deleteDocument(doc.id)}
                                className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"
                                aria-label={`Delete ${doc.type}`}
                                >
                                <FaTrash className="w-5 h-5" />
                                </button>
                            </div>
                            </li>
                        ))}
                        </ul>
                    )}
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                    <h2 className="text-xl font-semibold mb-4">Add New Document</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Document Type</label>
                        <select
                            id="type"
                            name="type"
                            value={newDocument.type}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="national-id">National ID Card</option>
                            <option value="passport">Passport</option>
                        </select>
                        </div>

                        <div>
                        <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">Document Number</label>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            value={newDocument.number}
                            onChange={handleInputChange}
                            placeholder="Enter Document Number"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="issueDate" className="block text-sm font-medium text-gray-700 mb-1">Issue Date</label>
                            <input
                            type="date"
                            id="issueDate"
                            name="issueDate"
                            value={newDocument.issueDate}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            required
                            />
                        </div>
                        <div>
                            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                            <input
                            type="date"
                            id="expiryDate"
                            name="expiryDate"
                            value={newDocument.expiryDate}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            required
                            />
                        </div>
                        </div>

                        <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Issuer Country</label>
                        <select
                            id="country"
                            name="country"
                            value={newDocument.country}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Select country</option>
                            <option value="us">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="ca">Canada</option>
                        </select>
                        </div>

                        <div>
                        <label htmlFor="frontSide" className="block text-sm font-medium text-gray-700 mb-1">Front Side</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                            <FaPlus className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-600">
                                <label htmlFor="frontSide" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                <span>Upload front side</span>
                                <input id="frontSide" name="frontSide" type="file" className="sr-only" onChange={handleFileChange} accept="image/jpeg,image/png" required />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                            </div>
                        </div>
                        </div>

                        <div>
                        <label htmlFor="backSide" className="block text-sm font-medium text-gray-700 mb-1">Back Side</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                            <FaPlus className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-600">
                                <label htmlFor="backSide" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                <span>Upload back side</span>
                                <input id="backSide" name="backSide" type="file" className="sr-only" onChange={handleFileChange} accept="image/jpeg,image/png" required />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                            </div>
                        </div>
                        </div>

                        <button type="button" className="w-full ti-btn !py-2 !px-4 !text-[0.75rem] !text-white !font-medium bg-primary">Add Document</button>
                    </form>
                    </div>
                </div>

            {previewDocument && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                    <h2 className="text-2xl font-bold mb-4">Document Preview</h2>
                    <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                        <p><strong>Type:</strong> {previewDocument.type}</p>
                        <p><strong>Number:</strong> {previewDocument.number}</p>
                        <p><strong>Issue Date:</strong> {previewDocument.issueDate}</p>
                        </div>
                        <div>
                        <p><strong>Expiry Date:</strong> {previewDocument.expiryDate}</p>
                        <p><strong>Country:</strong> {previewDocument.country}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                        <h6 className="font-semibold mb-2">Front Side</h6>
                        {previewDocument.frontSide ? (
                            <Image
                            src={URL.createObjectURL(previewDocument.frontSide)}
                            alt="Front side of document"
                            className="w-full h-auto object-cover rounded-md"
                            />
                        ) : (
                            <div className="bg-gray-200 w-full h-48 flex items-center justify-center rounded-md">
                            <p className="text-gray-500">No image uploaded</p>
                            </div>
                        )}
                        </div>
                        <div>
                        <h6 className="font-semibold mb-2">Back Side</h6>
                        {previewDocument.backSide ? (
                            <Image
                            src={URL.createObjectURL(previewDocument.backSide)}
                            alt="Back side of document"
                            className="w-full h-auto object-cover rounded-md"
                            />
                        ) : (
                            <div className="bg-gray-200 w-full h-48 flex items-center justify-center rounded-md">
                            <p className="text-gray-500">No image uploaded</p>
                            </div>
                        )}
                        </div>
                    </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                    <button
                        onClick={() => setPreviewDocument(null)}
                        className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                    >
                        Close
                    </button>
                    </div>
                </div>
                </div>
            )}
            </div>
        </Fragment>
    )
}

export default UserDocument